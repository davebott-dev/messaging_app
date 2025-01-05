import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/Github";
import Panel from "../components/Panel";


const Root = () => {
  const [open,setOpen] =useState(true);
  const [user, setUser]= useState([]);
  const token = localStorage.getItem('authToken');
  const navigate = useNavigate();

  useEffect(()=> {
    if(!token) {
      navigate('/login');
    } else {
      const fetchData = async()=> {
        const response = await fetch('http://localhost:8080/api', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUser(data);
        console.log(user)
      }
    fetchData();  
    }
  },[token,navigate]);

  return (
    <div className={open? "rootCont open": "rootCont closed"}>
     <Panel open ={open} setOpen={setOpen} user ={user}/>
      <div>
        <Outlet context = {[user]}/>
        <footer className="item-c">
          <div>Made with ❤️ by David Bottenberg</div>
          <a href="https://github.com/davebott-dev">
            <GitHubIcon />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Root;

//work on index (outlet) and panel functionality with backend 
//messages getting posted to correct chat room..
//how messages appear on screen for users...etc