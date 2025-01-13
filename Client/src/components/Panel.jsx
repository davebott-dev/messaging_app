import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChatIcon from "@mui/icons-material/Chat";
import Chats from "../components/Chats";
import Members from "../components/Members";
import Friends from "../components/Friends";
import "../App.css";

const Panel = ({ open, setOpen, user }) => {
  const [view, setView] = useState(0);
  const [contents, setContent] = useState(null);
  const [bold, setBold] = useState(0);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
  setSearch(new URLSearchParams(window.location.search).get('username'));
    console.log(search);

    const fetchData = async () => {
      const response =
        view == 0
          ? await fetch("http://localhost:8080/api/chats")
          : await fetch("http://localhost:8080/api/users");
      const data = await response.json();
      console.log(data);
      setContent(data);
    };
    fetchData();
  }, [search,view]);

  return (
    <nav className={`panel ${open ? "open" : "closed"}`}>
      <div>
        <div>
          {open ? <div>ChatterApp</div> : <ChatIcon fontSize="large" />}
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
          </IconButton>
        </div>
        {open ? (
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
        ) : (
          <div>
            {view == 0 ? (
              <div className="highlighted">Chats</div>
            ) : view == 1 ? (
              <div className="highlighted">Friends</div>
            ) : view == 2 ? (
              <div className="highlighted">Members</div>
            ) : null}
          </div>
        )}
      </div>
      <div id="content">
        {view == 0
          ? contents?.content.map((el, index) => {
              const handleLinkNavigation = () => {
                navigate("/" + el.id);
                setBold(index);
              };
              const handleDelete = async (e) => {
                e.preventDefault();
                try {
                  const response = await fetch(
                    "http://localhost:8080/api/chats/delete/" + el.id,
                    {
                      method: "POST",
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  );
                  const data = await response.json();
                  if (data.success) {
                    navigate("/");
                  } else {
                    console.log("there was an error");
                  }
                } catch (err) {
                  console.error(err);
                } finally {
                  window.location.reload();
                }
              };
              return (
                <div key={index} className="chat-card">
                  <div
                    onClick={handleLinkNavigation}
                    className={
                      bold === index ? "chat-title bold" : "chat-title"
                    }
                  >
                    {el.title}
                  </div>
                  <form onSubmit={handleDelete}>
                    <button type="submit">Delete</button>
                  </form>
                </div>
              );
            })
          : contents?.content.map((el, index) => (
               search===null? <div key={index}>{el.username}</div>
            : search !==null && el.username ===search? <div> {el.username}</div> : null ))}
      </div>
      <div>
        {view == 0 && <Chats isOpen={open} user={user} />}
        {view == 1 && <Friends isOpen={open} user={user} />}
        {view == 2 && <Members isOpen={open} user={user} />}
      </div>
    </nav>
  );
};

export default Panel;
