import "./topbar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";

import topRightImg from "./../../assets/images/sunset.jpg";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Topbar = () => {
  // const user = false;
  const {user,dispatch} =useContext(Context);
  const PF ="http://localhost:4500/api/images/";


  const handleLogout=()=>{
    dispatch({type:"LOGOUT"});
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon">
          <FacebookIcon />
        </i>
        <i className="topIcon">
          <TwitterIcon />
        </i>
        <i className="topIcon">
          <PinterestIcon />
        </i>
        <i className="topIcon">
          <InstagramIcon />
        </i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {
              user && "LOGOUT"
            }
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
          <img className="topImg" src={PF+user.profilePicture} alt="bg" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon">
          <SearchIcon />
        </i>
      </div>
    </div>
  );
};

export default Topbar;
