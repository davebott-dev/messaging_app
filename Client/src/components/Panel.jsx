import {useState} from 'react';
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Chats from "../components/Chats";
import Members from "../components/Members";
import Friends from "../components/Friends";

const Panel = () => {
 const [view, setView] = useState(0);

    return (
        <nav>
        <div>
          <div>
            <div>ChatterApp</div>
            <IconButton >
              <ArrowBackIosNewIcon />
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
          {view == 0 && <Chats />}
          {view == 1 && <Friends />}
          {view == 2 && <Members />}
        </div>
      </nav>
    )
}

export default Panel;