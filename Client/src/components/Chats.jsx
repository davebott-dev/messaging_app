import {useState} from 'react';
import { IconButton, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from './Accordion';
import "../App.css";

const Chats = ({ isOpen, user }) => {
  const [active, setActive] = useState(false);
  
  return (
    <>
      <div>
        {isOpen ? (
          <input
            type="text"
            placeholder="New Chat Name"
            id="index-input"
            required
          />
        ) : (
          <div>New Chat</div>
        )}
        <IconButton>
          <AddIcon fontSize="large" />
        </IconButton>
      </div>
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
