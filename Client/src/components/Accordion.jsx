import { Link } from "react-router-dom";
import "../App.css";

const Accordion = ({ active }) => {
  const handleDeleteAction = () => {
    let result = confirm("Do you really want to delete your account?");

    if (result) {
      alert("your account has been deleted");
    }
  };
  return  (
    <div
      className={`account-accordion ${active ? 'open' : 'closed'}`}
    >
      <Link to="profile/123">View Profile</Link>
      <div onClick={handleDeleteAction}>Delete Profile</div>
    </div>
  ) 
};

export default Accordion;
