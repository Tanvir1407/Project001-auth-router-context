import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handletologout = () => {
    logout()
      .then(result => {
      console.log(result)
      })
      .catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
          <Link to="/home"  className="p-2 hover:text-white duration-300">Home</Link>
          <Link to="/order" className="p-2 hover:text-white duration-300">Order</Link>
          <Link to="/Register" className="p-2 hover:text-white duration-300">Register</Link>
          {
            user ?<div onClick={handletologout} className="p-2 cursor-pointer hover:text-white duration-300">LogOut</div>: <Link to="/login" className="p-2 hover:text-white duration-300">Login</Link>
          }
          {
            user && <div><small>Welcome {user.email }</small></div>
          }
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
