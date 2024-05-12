import { Link } from "react-router-dom";

const Login = () => {
  return  <div className="hero p-5 md:p-20 ">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Securely access your account. Log in now for streamlined
        navigation and personalized services.
      </p>
    </div>
    <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
      <form className="card-body pb-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
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
            placeholder="Password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <p className="mt-4">
              New to this website? Please{" "}
              <Link className="btn-link" to="/register">
                Register
              </Link>
            </p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline text-xl">Login</button>
        </div>
      </form>

    </div>
  </div>
</div>;
};

export default Login;
