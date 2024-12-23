import { IconButton, Avatar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Friends = () => {



    return (
        <>
        <div>
            <input type="text" placeholder="Search Friends" id="index-input"/>
            <IconButton><SearchIcon fontSize= "large"/></IconButton>
          </div>
          <div>
            <div>Account</div>
            <IconButton><ExpandLessIcon fontSize= "large"/></IconButton>
          </div>
          <div>
            <Avatar>DB</Avatar>
            <div>Name</div>
          </div>
          </>
    )
}

export default Friends;