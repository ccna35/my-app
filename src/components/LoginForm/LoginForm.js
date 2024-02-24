import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/authSlice";
import { Button } from "react-bootstrap";

const LoginForm = ({ onLogin, firstName, lastName, age }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [username, setUsername] = useState(0);
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Replace with your login logic (e.g., call an API, redirect, etc.)
  //   onLogin(username, password);
  // };

  const handleLogin = () => {
    // Dispatch the logout action
    dispatch(login());
    navigate("/");
  };

  return (
    <Button type="button" onClick={handleLogin}>
      Login
    </Button>

    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="username">Username:</label>
    //   <input
    //     type="text"
    //     id="username"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //   />
    //   <label htmlFor="password">Password:</label>
    //   <input
    //     type="password"
    //     id="password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button type="submit">Login</button>

    // </form>
  );
};

export default LoginForm;
