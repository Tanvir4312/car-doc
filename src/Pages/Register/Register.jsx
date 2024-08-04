import { useContext } from 'react';
import logo from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const { creatUser } = useContext(AuthContext)

    const handleRegister = e => {


        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        creatUser(email, password)
        .then(result => {
            
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-20">
                    <h1 className="text-5xl font-bold">Register</h1>
                    <img src={logo} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="Password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='text-center pb-3'>
                        <Link to={'/login'}>Already have an account? <a className="text-orange-500" href="">Login</a></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;