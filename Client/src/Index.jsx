import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./App.css";

function Index() {
  return (
   
    <div className="outlet">
      <div>Chat Name</div>
      <div></div>
      <div>
        <input
          type="text"
          id="msg-input"
          placeholder="Let the world see your message..."
        />
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Index;
