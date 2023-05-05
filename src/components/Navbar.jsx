import React from "react";
import NavbarLogo from "../assets/logoWaysGalleryNav.png";
import ProfileIcon from "../assets/user.png";
import OrderIcon from "../assets/order.png";
import LogoutIcon from "../assets/logout.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar bg-navbar border border-b-navbar-line h-28">
        {/* NAVBAR LOGO */}
        <div className="flex-1 pl-14">
          <a
            onClick={() => navigate("/home")}
            className="btn btn-ghost normal-case h-full text-xl"
          >
            <img src={NavbarLogo} />
          </a>
        </div>

        {/* AVATAR */}
        <div className="flex-none gap-2 pr-14">
          <div className="dropdown dropdown-end dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-32 rounded-full ring ring-light-green ring-offset-base-100 ring-offset-1">
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
              </div>
            </label>

            {/* DROPDOWN */}
            <ul
              tabIndex={0}
              className=" p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-44"
            >
              <li>
                <a
                  onClick={() => navigate("/profile")}
                  className="hover:bg-light-grey hover:ring-1 hover:ring-neutral-400 hover:text-base hover:font-bold"
                >
                  <span>
                    <img className="w-5" src={ProfileIcon} />
                  </span>
                  Profile
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/order")}
                  className="hover:bg-light-grey hover:ring-1 hover:ring-neutral-400 hover:text-base hover:font-bold"
                >
                  <span>
                    <img className="w-5" src={OrderIcon} />
                  </span>
                  Order
                </a>
              </li>
              <li>
                <a className="hover:bg-light-grey hover:ring-1 hover:ring-neutral-400 hover:text-base hover:font-bold">
                  <span>
                    <img className="w-5" src={LogoutIcon} />
                  </span>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
