// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import AppontmentData from "../component/AppontmentData";


const MyAppointments = () => {
    const {user} = useContext(AuthContext)
    const [appointmentData, setAppointmentData] = useState([]);
    useEffect(()=>{
        const localData = localStorage.getItem('appointment')
        let savedData = []
        if(localData){
            savedData = JSON.parse(localData);
        }
        const userData = savedData.filter(data => data.email == user?.email);
        setAppointmentData(userData);
        console.log(userData)
    },[user?.email])
    return (
        <div>
             <h1 className="text-3xl">Design in progress</h1>
            {
                appointmentData.map((data, index) => <AppontmentData key={index} data={data}></AppontmentData>)
            }
        </div>
    );
};

export default MyAppointments;