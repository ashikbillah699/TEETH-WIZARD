/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const { handleRegister, manageProfile, handleGoogle, signOut } = useContext(AuthContext);

    const [error, setError] = useState("");

    const getHandleRegister = event => {
        event.preventDefault()
        setError("")
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const cpassword = event.target.cpassword.value;
        if (password.length < 6) {
            return setError('Password must be at least 6 characters long.');
        }

        if (!/[A-Z]/.test(password)) {
            return setError('Password must contain at least one uppercase letter.');
        }

        if (!/\d/.test(password)) {
            return setError('Password must contain at least one number.');
        }

        if (password !== cpassword) {
            return setError("password did't match")
        }

        console.log(email, name, photo, password, cpassword);
        handleRegister(email, password)
            .then((res) => {
                manageProfile(name, photo)
                event.target.reset()

            })
            .catch(error => {
                setError(error.code)
            })
    }
    return (
        <div className="hero mt-10">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <h1 className="text-2xl font-semibold mx-auto border-b mt-5">REGISTER</h1>
                <form onSubmit={getHandleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
                    </div>
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
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input name="cpassword" type="password" placeholder="confirm password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        <button className="btn btn-primary mt-3" onClick={handleGoogle}>Google login</button>
                    </div>
                    <div>
                        {error && <p className="text-red-600">{error}</p>}
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Register;