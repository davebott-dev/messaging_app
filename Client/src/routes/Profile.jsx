import {useParams} from 'react-router-dom';

const Profile =()=> {
    const {profileId} = useParams();

    return (
        <div>
            Hello world from the account page for profile {profileId}
        </div>
    )
}

export default Profile;