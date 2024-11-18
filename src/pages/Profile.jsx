import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            this is my profile.{
                // <img src={user?.photoURL} alt="" />
            }
        </div>
    );
};

export default Profile;