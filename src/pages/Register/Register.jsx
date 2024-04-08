import { Link } from "react-router-dom";
import Navbar from "../Sheard/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
   const {creatUser, user} = useContext(AuthContext)
   
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, photo, email, password);
        // create user
        creatUser(email, password)
        .then(result=>{
           
            console.log(result.user)

        })
        .catch(error=>{
            console.error(error);
        })

    }


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-4xl text-center my-10">Please Register</h2>


                <form onSubmit={handleRegister} className="card-body w-2/3 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Photo URL"
                            name="photo"
                            className="input input-bordered"
                            required />
                    </div>
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
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            className="input input-bordered"
                            required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">
                    alrady Have an Accout Please ?
                    <Link
                        to='/login'
                        className="text-blue-600 font-bold"
                    >Login</Link></p>
            </div>

        </div>
    );
};

export default Register;