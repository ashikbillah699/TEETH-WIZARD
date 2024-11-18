/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Feedback = ({ feedback }) => {
    const { name, review, userImg } = feedback;

    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <div className="card-title">
                    <img className="w-12 h-12 rounded-full" src={userImg} alt="" />
                    <h2 >{name}</h2>
                    <div className="badge badge-secondary">{new Date().toLocaleDateString()}</div>
                </div>
                <p>{review}</p>
                <div className="card-actions justify-end">
                    <div className="flex gap-2">
                        <div className="rating ">
                            <input type="radio" name="rating-2" className="w-5 h-5 mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="w-5 h-5 mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="w-5 h-5 mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="w-5 h-5 mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="w-5 h-5 mask mask-star-2 bg-orange-400" />
                        </div>
                        <Link className="badge bg-orange-400 text-white badge-outline">Reating</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;