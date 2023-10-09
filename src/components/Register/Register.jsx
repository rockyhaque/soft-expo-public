import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import { Toaster } from "react-hot-toast";

const Register = () => {

    const {signUp} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    // const handleEmail = (text) => {
    //     setEmail(text);
    // }

    const handleRegister = () => {
        if(!/^(?=.*[A-Za-z])(?=.+\d)[A-Za-z\d]{8, }$/.test(password)){
            setError("Minimum 8 character, at least one leter and one number ");
        }
        else{
            setError("");
            if(email){
                signUp(email, password)
                .then(result => {
                    console.log(result.user);
                })
            }
        }
    }
 
  return (
    <div>

    <div><Toaster/></div>
    toast.error(error)
    
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                {/* <p>{error}</p> */}
                <input onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover mt-5">
                    Forgot password?
                  </a>
                </label>
                <div>
                    <h2 className="my-5">Already Have an account? <Link className="text-cyan-500" to='/login'>Login</Link></h2>
                </div>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleRegister} className="btn btn-info">Register</button>
              </div>

              <div className="text-center">
                <button className="btn my-4 ">
                  Google Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
