import { Outlet,useNavigate } from "react-router";
import {useState, useEffect} from "react";
import { IconButton, Avatar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/Github";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from '@mui/icons-material/Add';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Root = () => {
  return (
    <div className="rootCont">
      <nav>
        <div>
          <div>
            <div>ChatterApp</div>
            <IconButton>
              <ArrowBackIosNewIcon />
            </IconButton>
          </div>
          <div>
            <div>Chats</div>
            <div>Friends</div>
            <div>Members</div>
          </div>
        </div>
        <div></div>
        <div>
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
            <div>Name</div>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
        <footer className="item-c">
          <div>Made with ❤️ by David Bottenberg</div>
          <a href="https://github.com/davebott-dev">
            <GitHubIcon />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Root;

//style the main page
//similar style to whatsapp/messanger
