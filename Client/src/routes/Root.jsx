import { NavLink, Outlet } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/Github';

const Root = () => {
  return (
    <div>
      <nav>
        Home
        </nav>
      <Outlet />
      <footer>
          <div>Made with ❤️ by David Bottenberg</div>
          <a href="https://github.com/davebott-dev"><GitHubIcon/></a>
        </footer>
    </div>
  );
};

export default Root;
