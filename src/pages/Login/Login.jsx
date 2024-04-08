
import { useContext } from "react";
import Navbar from "../Sheard/Navbar/Navbar";
import {useLocation, Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const {signIn } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            console.log(result.user)

            // navigate after login
            navigate(location?.state ? location.state : "/" );

        })
        .catch(error =>{
            console.error(error)
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-4xl text-center my-10">Please Login</h2>


                <form onSubmit={handleLogin} className="card-body w-2/3 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            name="email"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">
                    Do not have an accout
                    <Link
                        to='/register'
                        className="text-blue-600 font-bold"
                    >Register</Link></p>
            </div>

        </div>
    );
};

export default Login;