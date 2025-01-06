import {useState} from 'react';
import { IconButton, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from './Accordion';
import "../App.css";

const Chats = ({ isOpen, user }) => {
  const [active, setActive] = useState(false);
  const token = localStorage.getItem('authToken');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const chatName = e.target.chatName.value;

    try{
      const response = await fetch('http://localhost:8080/api/chats',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({chatName}),
      });
      const data = await response.json();
      console.log("data",data);
    }catch(err) {
      console.error(err);
    }
  }
  
  return (
    <>
      <form className = 'idx-form' onSubmit= {handleSubmit}>
        {isOpen ? (
          <input
            type="text"
            placeholder="New Chat Name"
            name= "chatName"
            id="index-input"
            required
          />
        ) : (
          <div>New Chat</div>
        )}
        <IconButton type = "submit">
          <AddIcon fontSize="large" />
        </IconButton>
      </form>
      <div>
        <div>
          <div>Account</div>
          <IconButton onClick ={()=>setActive(!active)}>
            {active==false? <ExpandLessIcon fontSize="large" />: 
            <ExpandMoreIcon fontSize="large"/>}
          </IconButton>
        </div>
        <Accordion active={active} isOpen={isOpen}/>
      </div>
      <div>
        <Avatar sx={{ width: 50, height: 50 }}>{user.name?.charAt(0)}</Avatar>
        {isOpen ? <div>{user.name}</div> : null}
      </div>
    </>
  );
};

export default Chats;
