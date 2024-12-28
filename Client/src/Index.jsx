import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./App.css";

function Index() {
  const [user, setUser]= useState([]);
  const token = localStorage.getItem('authToken');
  const navigate = useNavigate();

  useEffect(()=> {
    if(!token) {
      navigate('/login');
    } else {
      const fetchData = async()=> {
        const response = await fetch('http://localhost:8080/api', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUser(data);
      }
    fetchData();  
    }
  },[token,navigate]);

  return (
    user? 
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
    </div>: <p>Loading...</p>
  );
}

export default Index;
