import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const {user, handleSignOut} = useContext(AuthContext);

    const link = <>
        <li className="mx-2"><NavLink to='/'>Home</NavLink></li>
        <li className="mx-2"><NavLink to='/allTeatments'>All Treatments</NavLink></li>
        <li className="mx-2"><NavLink to='/myAppointments'>My Appointment</NavLink></li>
        <li className="mx-2"><NavLink to='/profile'>Profile</NavLink></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {link}
                    </ul>
                </div>
                <a className=" font-bold text-2xl">TEETH WIZARD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {
                    user ? <img className="w-[35px] h-[35px] rounded-full" src={user.photoURL} alt="" />
                    : <img className="w-[35px] h-[40px] " src="https://image.shutterstock.com/image-vector/profile-user-avatar-minus-search-260nw-2393607617.jpg" alt="" />
                }
                {
                    user ?  <Link onClick={handleSignOut} className="btn btn-sm bg-info text-white">Sign Out</Link>
                    : <Link to='/login' className="btn btn-sm bg-info text-white">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;