import {useState} from 'react';
import { IconButton, Avatar, Snackbar, Alert } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from './Accordion';
import "../App.css";

const Chats = ({ isOpen, user }) => {
  const [active, setActive] = useState(false);
  const [open,setOpen] = useState(false);
  const token = localStorage.getItem('authToken');

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

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
      if(data.success) {
        window.location.reload();
      } else {
        setOpen(true);
      }
    }catch(err) {
      console.error(err);
    }
  }

  const handleInitials = (name) => {
    let init = "";
    let arr = name?.split(" ");

    for (let i = 0; i < arr?.length; i++) {
      init += arr[i].charAt(0);
    }
    return init;
  };
  
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
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error">
                Choose a different chat name...
              </Alert>
          </Snackbar>
      </form>
      <div>
        <div>
          <div>Account</div>
          <IconButton onClick ={()=>setActive(!active)}>
            {active==false? <ExpandLessIcon fontSize="large" />: 
            <ExpandMoreIcon fontSize="large"/>}
          </IconButton>
        </div>
        <Accordion active={active} isOpen={isOpen} user={user}/>
      </div>
      <div>
        <Avatar sx={{ width: 50, height: 50 }}>{handleInitials(user?.name)}</Avatar>
        {isOpen ? <div>{user.name}</div> : null}
      </div>
    </>
  );
};

export default Chats;
