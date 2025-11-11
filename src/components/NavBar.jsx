import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  console.log("user", user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {}
  };
  return (
    <div className="navbar bg-base-200 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          DevConnect...
        </Link>
      </div>

      {user && (
        <div className="flex gap-3 items-center">
          <strong>Welcome {user.firstName}</strong>
          <div className="dropdown dropdown-end mx-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/connections" className="justify-between">
                  Connections
                </Link>
              </li>
              <li className="justify-between pl-3" onClick={handleLogout}>
                Logout
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
