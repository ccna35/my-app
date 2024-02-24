import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { clearPersistedState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { Button } from "react-bootstrap";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());

    // Clear the persisted state
    clearPersistedState();
    // navigate("/login");
  };

  return (
    <nav
      style={{
        backgroundColor: isDarkMode ? "#333" : "#eee",
        color: isDarkMode ? "#fff" : "#333",
      }}
    >
      <div className="container d-flex align-items-center gap-3">
        <h1>My App</h1>
        <ul className="d-flex align-items-center gap-3">
          <li>
            <NavLink to={"/"}>Dashboard</NavLink>
          </li>
        </ul>
        <label>
          Dark Mode
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
        </label>
        <Button type="button" onClick={handleLogout}>
          Sign out
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
