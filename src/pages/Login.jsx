import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="w-full h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d0a0affb-1c76-4cf0-9d75-eb531f32458c/e81da519-216b-4341-b9e7-92d45398ddc3/IN-en-20221214-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
          className="hidden  sm:block w-full h-full object-cover"
        />
        <div className="fixed w-full h-screen bg-black/60 left-0 top-0  py-24 lg:py-5">
          <div className="m-auto max-w-[450px] h-[600px] bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h2 className="text-3xl font-bold">SignIn</h2>
              <form className=" flex flex-col py-6" onSubmit={handleOnSubmit}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="my-2 py-3 px-2 text-black outline-none bg-gray-300 rounded"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="my-2 py-3 px-2 text-black outline-none bg-gray-300 rounded"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="my-6 bg-netRed font-bold py-3 rounded"
                >
                  SignIn
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input
                      className="my-2 mr-2"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    Remember Me
                  </p>
                  <p className="cursor-pointer">Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">New to netflex! </span>
                  <Link to="/signup">SingUP</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
