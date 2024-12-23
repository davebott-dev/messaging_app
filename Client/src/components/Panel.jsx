import {useState} from 'react';
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Chats from "../components/Chats";
import Members from "../components/Members";
import Friends from "../components/Friends";

const Panel = ({open,setOpen}) => {
 const [view, setView] = useState(0);

    return (
        <nav className={`panel ${open ? "open": "closed"}`}>
        <div>
          <div>
            {open&&<div>ChatterApp</div>}
            <IconButton onClick={()=>setOpen(!open)}>
              {open ? <ArrowBackIosNewIcon />: <ArrowForwardIosIcon/>}
            </IconButton>
          </div>
      <div>
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
          </div>
        </div>
        <div></div>
        <div>
          {view == 0 && <Chats isOpen={open} />}
          {view == 1 && <Friends isOpen={open} />}
          {view == 2 && <Members isOpen={open}/>}
        </div>
      </nav>
    )
}

export default Panel;