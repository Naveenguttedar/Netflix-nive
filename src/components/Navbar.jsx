import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  return (
    <div className="px-4 py-3 flex items-center justify-between absolute z-10 w-full max-w-7xl">
      <Link to="/">
        <div className="w-[150px] border-1 border-white cursor-pointer">
          <img className="w-full " src="/images/logo.png" alt="logo" />
        </div>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white font-bold px-4 py-2">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-netRed hover:bg-netRed/30 text-white font-bold py-2 px-4 rounded"
          >
            logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white font-bold px-4 py-2">sign in</button>
          </Link>
          <Link to="/signup">
            <button className="bg-netRed hover:bg-netRed/30 text-white font-bold py-2 px-4 rounded">
              sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
