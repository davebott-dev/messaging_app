import { Link } from "react-router-dom";
import "../App.css";

const Accordion = ({ active, user }) => {
  const profileLink = "http://localhost:5173/profile/" + user.profile?.id;
  const handleDeleteAction = () => {
    let result = confirm("Do you really want to delete your account?");

    if (result) {
      alert("your account has been deleted");
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
