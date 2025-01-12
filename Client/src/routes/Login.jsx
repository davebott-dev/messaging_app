import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import "../App.css";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.showSuccessSnackbar) {
      setOpen(true);
    }
  }, [location.state]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/log-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.success) {
          localStorage.removeItem("authToken");
          localStorage.setItem("authToken", data.token);
          navigate("/");
        } else {
          setError(data.msg);
          setOpen(true);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="pageCont">
      <div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button className="form-btn" disabled={loading}>
            {loading ? "Please Wait" : "Sign in"}
          </button>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            {error ? (
              <Alert onClose={handleClose} severity="error">
                {error}
              </Alert>
            ) : (
              <Alert onClose={handleClose} severity="success">
                Signup Successful! Please Log in.
              </Alert>
            )}
          </Snackbar>
        </form>
        <span>
          Don't have an account?<Link to="/signup"> Sign up</Link>
        </span>
      </div>
      <div>
        <div className="grey one"></div>
        <div className="title-card">
          <h1>Welcome to ChatterApp!</h1>
          <p>The premier anonymous chatroom for web users!</p>
        </div>
        <div className="yellow two"></div>
        <div className="grey three"></div>
        <div className="yellow four"></div>
      </div>
    </div>
  );
};

export default Login;

