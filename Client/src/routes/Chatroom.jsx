import {useState, useEffect} from 'react';
import {useParams,useOutletContext} from 'react-router-dom';
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "../App.css";

function Chatroom() {
  const [content,setContent]=useState(null);
  const {chatroomId} = useParams();
  const [user] = useOutletContext();
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/api/room/'+chatroomId);
      const data = await response.json();
      console.log(data);
      setContent(data);
    };
    fetchData();
  }, [chatroomId]);

  const handleSubmit = async(e)=> {
    e.preventDefault();
    const message = e.target.message.value;
    const userId= user.id;
    try{
      const response = await fetch('http://localhost:8080/api/room/'+chatroomId, {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({message,userId}),
      });
      const data = await response.json();
      console.log("message",data);
    }catch(err) {
      console.error(err);
    } finally{
      window.location.reload();
    }
  }

  return (
   
    <div className="outlet">
      <div>{content?.chatroom.title}</div>
      <div>
        {content?.chatroom.messages.map((el,index)=>{

          return (
            <div key={index}>{el.msg}</div>
          )
        })}
      </div>
      <form id = "idx-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="msg-input"
          name= "message"
          placeholder="Let the world see your message..."
        />
        <IconButton color="primary" type="submit">
          <SendIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default Chatroom;
