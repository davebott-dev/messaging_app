import { Outlet, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/Github";
import Panel from "../components/Panel";


const Root = () => {
  //implement a panel sidebar that I can expend and hide on click
  return (
    <div className="rootCont">
     <Panel/>
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
