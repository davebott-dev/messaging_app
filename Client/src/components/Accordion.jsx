import { Link } from "react-router-dom";
import "../App.css";

const Accordion = ({ active, user }) => {
  const profileLink = "http://localhost:5173/profile/" + user.profile?.id;
  const token = localStorage.getItem("authToken");

  const handleDeleteAction = async() => {
    let result = confirm("Do you really want to delete your account?");

    if (result) {
      const response = await fetch("http://localhost:8080/api/delete/"+user.id,{
        method:"POST",
        headers:{
          Authorization: `Bearer ${token}`
        },
      });
      if(response.ok) {
        const data = await response.json();
        if(data.success) {
          console.log("deleted",data);
          localStorage.removeItem("authToken");
          window.location.reload();
        } else {
          console.error("user was not deleted", data.err);
        }
      } else {
        console.error("invalid response");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };

  return (
    <div className={`account-accordion ${active ? "open" : "closed"}`}>
      <Link to={profileLink}>View Profile</Link>
      <span onClick={handleLogout}>Log out</span>
      <div onClick={handleDeleteAction}>Delete Profile</div>
    </div>
  );
};

export default Accordion;
