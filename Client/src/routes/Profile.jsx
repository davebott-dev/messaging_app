import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Profile =()=> {
    const {profile, setProfile} =useState([]);
    const {profileId} = useParams();

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("http://localhost:8080/api/profile/"+profileId);
          const data = await response.json();
          console.log(data);
          setProfile(data);
        };
        fetchData();
      }, [profileId,setProfile]);

    return (
        <div>
            <div>{profile?.user.name}</div>
        </div>
    )
}

export default Profile;