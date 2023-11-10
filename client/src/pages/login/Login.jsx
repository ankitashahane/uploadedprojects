import { useContext, useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

const Login = () => {

  const userRef = useRef();
  const passwordRef = useRef();

  const {user,dispatch , isFetching} = useContext(Context);
  
  const handleSubmitLogin =async(e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axios.post("/auth/login",{
        username : userRef.current.value,
        password : passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS" , payload:res.data});

    } catch (error) {
      dispatch({type:"LOGIN_FAILURE" });      
    }
  }

  console.log(user);
  console.log(isFetching);
  return (
    <div className="login">
      <div className="login-card">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmitLogin}>
          <label >Username</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter Your Username..."
            ref={userRef}
          />
          <label >Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter Your Password..."
            ref={passwordRef}
          />
          <button type="submit" className="loginButton" disabled={isFetching}>
            Login
          </button>
        </form>
        <button type="" className="loginRegisterButton" >
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
