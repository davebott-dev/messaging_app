import {useState} from 'react';
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChatIcon from '@mui/icons-material/Chat';
import Chats from "../components/Chats";
import Members from "../components/Members";
import Friends from "../components/Friends";
import "../App.css";


const Panel = ({open,setOpen,user}) => {
 const [view, setView] = useState(0);

    return (
        <nav className={`panel ${open ? "open": "closed"}`}>
        <div>
          <div>
            {open? <div>ChatterApp</div>: <ChatIcon fontSize ="large"/>}
            <IconButton onClick={()=>setOpen(!open)}>
              {open ? <ArrowBackIosNewIcon />: <ArrowForwardIosIcon/>}
            </IconButton>
          </div>
      {open ? <div>
            <div
              onClick={() => setView(0)}
              className={view == 0 ? "highlighted" : null}
            >
              Chats
            </div>
            <div
              onClick={() => setView(1)}
              className={view == 1 ? "highlighted" : null}
            >
              Friends
            </div>
            <div
              onClick={() => setView(2)}
              className={view == 2 ? "highlighted" : null}
            >
              Members
            </div>
          </div> : 
          <div>
            {view ==0 ? <div className="highlighted">Chats</div>:
            view ==1? <div className="highlighted">Friends</div>:
            view ==2 ? <div className="highlighted">Members</div>: 
            null}
            </div>
          }
        </div>
        <div></div>
        <div>
          {view == 0 && <Chats isOpen={open} user={user} />}
          {view == 1 && <Friends isOpen={open} user={user}/>}
          {view == 2 && <Members isOpen={open} user={user}/>}
        </div>
      </nav>
    )
}

export default Panel;