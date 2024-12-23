import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/Github";
import Panel from "../components/Panel";


const Root = () => {
  const [open,setOpen] =useState(true);

  return (
    <div className={open? "rootCont open": "rootCont closed"}>
     <Panel open ={open} setOpen={setOpen}/>
      <div>
        <Outlet/>
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
