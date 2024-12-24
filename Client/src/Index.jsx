import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import './App.css';

function Index() {

  return (
    <>
      <div className = "outlet">Chat Name</div>
      <div>

      
      </div>

      
      <div>
        <input type="text" id='msg-input'/>
        <IconButton><SendIcon/></IconButton>
      </div>
    </>
  )
}

export default Index

