/* eslint-disable react/prop-types */


const AppontmentData = ({data}) => {
    console.log(data);
    const {address,date,email, fName,lName,phone, treatment}= data;

    return (
        <div className="border rounded-lg p-5 mt-6">
            <h1 className="text-2xl">{treatment}</h1>
            <h1>{fName + " " + lName}</h1>
            <p>{date}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address}</p>
            <p>{address}</p>

        </div>
    );
};

export default AppontmentData;