/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Service = ({ service }) => {
    const { image, treatment, description, cost,id } = service;
    return (
        <div className="card shadow-xl">
            <figure>
                <img
                    className="h-[235px]"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title">
                    {treatment}
                    <div className="badge badge-secondary">$ {cost}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <NavLink to={`/serviceDetail/${id}`} className="badge bg-info text-white badge-outline">Cheackout More</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Service;