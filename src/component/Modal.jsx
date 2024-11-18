/* eslint-disable react/prop-types */
 
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Modal = ({treatment}) => {
    const {user} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const fName = event.target.fname.value;
        const lName = event.target.lname.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const date = event.target.date.value;
        const address = event.target.address.value;
        console.log(fName,lName, email, phone, date, address, treatment);
        const info = {fName,lName, email, phone, date, address, treatment}

        let saveData = [];
        const localData = localStorage.getItem('appointment');
        if(localData){
            saveData = JSON.parse(localData);
        }
        saveData.push(info);   
        localStorage.setItem('appointment', JSON.stringify(saveData))

    }
    return (
        <div>
            <dialog id="my_modal_5" className="modal md:relative">
                <div className="modal-box">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-2xl font-semibold text-center pb-2">Make Appointment</h1>
                        <div className="flex gap-2 justify-between mt-2">
                            <input className="border p-3 w-2/4 rounded-md " name="fname" type="text" placeholder="First name" />
                            <input className="border p-3 w-2/4 rounded-md " name="lname" type="text" placeholder="Last name" />
                        </div>
                        <div className="flex gap-2 justify-between mt-2">
                            <input className="border p-3 w-2/4 rounded-md " name="email" type="email" placeholder="Yor email address" defaultValue={user?.email}/>
                            <input className="border p-3 w-2/4 rounded-md " name="phone" type="number" placeholder="your phone number" />
                        </div>
                        <div className="flex gap-2 justify-between mt-2">
                            <input className="border p-3 w-2/4 rounded-md " name="date" type="date" placeholder="Appointment Date" />
                            <input className="border p-3 w-2/4 rounded-md " name="address" type="text" placeholder="your address" />
                        </div>
                        <button className="btn btn-sm btn-info text-white absolute bottom-6 right-24">Make Appointment</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog ">
                            <button className="btn btn-sm ml-2 btn-warning text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog >
        </div >
    );
};

export default Modal;