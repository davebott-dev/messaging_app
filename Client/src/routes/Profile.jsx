import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import "../App.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const { profileId } = useParams();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8080/api/profile/" + profileId
      );
      const data = await response.json();
      console.log(data);
      setProfile(data);
    };
    fetchData();
  }, [profileId, setProfile]);

  const handleInitials = (name) => {
    let init = "";
    let arr = name?.split(" ");

    for (let i = 0; i < arr?.length; i++) {
      init += arr[i].charAt(0);
    }
    return init;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const bio = e.target.bio.value;

    try{
      const response = await fetch('http://localhost:8080/api/profile/'+profileId+'/update',{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({bio})
      });
      if(response.ok){
        const data = await response.json();
        console.log("bio",data);
        if(data.success) {
          window.location.reload();
        } else {
          console.error(data.err)
        }
      }
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <div className="profile-page">
      <div>
        <a href="/">
          <IconButton color="primary">
            <KeyboardReturnIcon fontSize="large" />
          </IconButton>
        </a>
      </div>
      <div>
        <div>
          <Avatar sx={{ width: 450, height: 450, fontSize:'8rem' }}>
            {handleInitials(profile?.profile.user.name)}
          </Avatar>
        </div>
        <div>
          <div>
            <strong>Name</strong>: {profile?.profile.user.name}
          </div>
          <div>
            <strong>Username</strong>: {profile?.profile.user.username}
          </div>
          <div>
            <strong>Bio</strong>: {profile?.profile.bio}
          </div>
          <form onSubmit={handleSubmit}>
            <textarea name="bio" id="bio" placeholder="update bio..."></textarea>
            <button type ="submit">Update</button>
          </form>
          <div>
            <em>
              This user has created{" "}
              <strong>{profile?.profile.user.messages.length}</strong> messages
              in total
            </em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
