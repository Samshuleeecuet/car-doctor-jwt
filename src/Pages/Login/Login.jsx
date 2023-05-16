import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Login = () => {
  const {loginUser,loginwithgoogle} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  //console.log(from)
    const handleLogin = (e)=>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
  
      loginUser(email,password)
      .then(result=>{
        const user= result.user;
          console.log(result.user);
          
          navigate(from, {replace: true})
         
         form.reset();
      })
      .catch(err=> console.log(err.message))
    }

    const handlegoogle = ()=>{
      loginwithgoogle()
      .then(result=>{
        //console.log(result.user);
        navigate(from, {replace: true})
    })
    .catch(err=> console.log(err.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content lg:flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
    
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="form-control mt-6">
                <button onClick={handlegoogle} className="btn btn-primary">Login With Google</button>
              </div>
            <Link to="/register" className="label-text-alt text-center link link-hover">
            New to Auth Master
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Login;