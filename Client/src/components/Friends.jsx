import {useState} from 'react';
import { IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from './Accordion';
import "../App.css";

const Friends = ({ isOpen,user }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <form className = 'idx-form'>
        {isOpen ? (
          <input type="text" placeholder="Search Friends" id="index-input" />
        ) : (
          <div>Search Friends</div>
        )}
        <IconButton>
          <SearchIcon fontSize="large" />
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
        <Accordion active={active} user={user}/>
      </div>
      <div>
        <Avatar sx={{ width: 50, height: 50 }}>{user.name?.charAt(0)}</Avatar>
        {isOpen ? <div>{user.name}</div> : null}
      </div>
    </>
  );
};

export default Friends;
