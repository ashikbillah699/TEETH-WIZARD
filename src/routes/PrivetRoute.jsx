/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user, loding} = useContext(AuthContext);
    const location = useLocation()

    if(loding){
        return <span className="loading loading-bars loading-lg mx-auto"></span>
    }

    if(!user){
       return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }

    return children
};

export default PrivetRoute;