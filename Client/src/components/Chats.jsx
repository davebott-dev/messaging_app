import { IconButton, Avatar } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Chats = ({isOpen}) => {



    return (
        <>
        <div>
            <input type="text" placeholder="New Chat Name" id="index-input"/>
            <IconButton><AddIcon fontSize= "large"/></IconButton>
          </div>
          <div>
            <div>Account</div>
            <IconButton><ExpandLessIcon fontSize= "large"/></IconButton>
          </div>
          <div>
            <Avatar>DB</Avatar>
            {isOpen? <div>Name</div>:null}
          </div>
          </>
    )
}

export default Chats;