import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogle = () => {
    googleSignIn()
    .then(result => {
        console.log(result.user);
    })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
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
                <input
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
                    <h2 className="my-5">New here? Please <Link className="text-cyan-500" to='/register'>Register</Link></h2>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info ">Login</button>
              </div>

              <div className="text-center">
                <button onClick={handleGoogle} className="btn my-4">Google Login</button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
