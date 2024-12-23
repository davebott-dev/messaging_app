import {useState} from 'react';
import { IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from './Accordion';

const Members = ({ isOpen }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div>
        {isOpen ? (
          <input type="text" placeholder="Search Members" id="index-input" />
        ) : (
          <div>Search Members</div>
        )}
        <IconButton>
          <SearchIcon fontSize="large" />
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
        <Accordion active={active}/>
      </div>
      <div>
        <Avatar sx={{ width: 50, height: 50 }}>DB</Avatar>
        {isOpen ? <div>Name</div> : null}
      </div>
    </>
  );
};

export default Members;
