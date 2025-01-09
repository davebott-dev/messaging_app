import {useState} from 'react';
import { IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from './Accordion';
import "../App.css";

const Friends = ({ isOpen,user }) => {
  const [active, setActive] = useState(false);

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
        <Avatar sx={{ width: 50, height: 50 }}>{handleInitials(user?.name)}</Avatar>
        {isOpen ? <div>{user.name}</div> : null}
      </div>
    </>
  );
};

export default Friends;
