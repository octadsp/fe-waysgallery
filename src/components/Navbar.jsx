import React, { useContext } from "react";
import NavbarLogo from "../assets/logoWaysGalleryNav.png";
import ProfileIcon from "../assets/user.png";
import OrderIcon from "../assets/order.png";
import LogoutIcon from "../assets/logout.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const [state, _] = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    // Back to Landing Page
    navigate("/auth");
  };
  return (
    <>
      <div className="navbar bg-navbar border border-navbar-line h-28">
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
        <div>
          <div className="btn btn-sm mr-10 bg-light-green border-none hover:ring hover:ring-light-green">
            <button onClick={() => navigate("/upload-post")} className="px-3">
              Upload
            </button>
          </div>
          <div className="flex-none gap-2 pr-14">
            <div className="dropdown dropdown-end dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-32 hover:ring-neutral-500 rounded-full ring ring-light-green ring-offset-base-100 ring-offset-1">
                  <img src={state.user.image} />
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
                    onClick={() => navigate("/list-order")}
                    className="hover:bg-light-grey hover:ring-1 hover:ring-neutral-400 hover:text-base hover:font-bold"
                  >
                    <span>
                      <img className="w-5" src={OrderIcon} />
                    </span>
                    Order
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleLogout}
                    className="hover:bg-light-grey hover:ring-1 hover:ring-neutral-400 hover:text-base hover:font-bold"
                  >
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
      </div>
    </>
  );
}

export default Navbar;
