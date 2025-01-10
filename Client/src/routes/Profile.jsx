import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import "../App.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const { profileId } = useParams();

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

  return (
    <div>
      <div>
      <a href="/"><button>Return</button></a>
      </div>
      <Avatar sx={{ width: 100, height: 100 }}>
        {handleInitials(profile?.profile.user.name)}
      </Avatar>
      <div>name: {profile?.profile.user.name}</div>
      <div>username: {profile?.profile.user.username}</div>
      <div>bio: {profile?.profile.bio}</div>
      <textarea name="bio" id="bio" placeholder="update bio..."></textarea>
      <button>Update</button>
      <div>
        This user has created {profile?.profile.user.messages.length} messages
        in total
      </div>
    </div>
  );
};

export default Profile;
