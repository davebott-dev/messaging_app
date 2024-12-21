import { NavLink, Outlet } from "react-router";
import GitHubIcon from "@mui/icons-material/Github";

const Root = () => {
  return (
    <div className="rootCont">
      <nav>
        <div>
          <div>ChatterApp</div>
          <button>Back</button>
        </div>
        <div>
          <NavLink>Chats</NavLink>
          <NavLink>Friends</NavLink>
          <NavLink>Members</NavLink>
        </div>
        <div></div>
        <div>
          <input type="text" placeholder="New Chat Name" />
          <button>Add</button>
        </div>
        <div>
          <div>Account</div>
          <button>Expand</button>
        </div>
        <div>
          <div>D</div>
          <div>Name</div>
        </div>
      </nav>
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
