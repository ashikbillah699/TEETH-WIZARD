/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { handleGoogle, handleLogin } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/'

    const handleLoginSubmit = async (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password)
        handleLogin(email, password)
            .then(res => {
                event.target.reset();
                navigate(location.state.from)
            })
            .catch(err => {
                setError(err.code);
            })
    }

    const googlehandler = ()=>{
        handleGoogle()
        .then(res => {
            navigate(location.state.from)
        })
    }

    return (
        <div>
            <div className="hero mt-10">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <h1 className="text-2xl font-semibold mx-auto border-b mt-5">LOGIN</h1>
                    <form onSubmit={handleLoginSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control"> <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <button className="btn btn-primary mt-3" onClick={googlehandler}>google login</button>
                        </div>
                        <div>
                            {error && <p className="text-red-600">{error}</p>}
                        </div>
                        <Link to='/register' className="register-link underline text-xs text-blue-600">If you have no account,Please Register</Link>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Login;