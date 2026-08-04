import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Navbar = () => {

  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="navbar">

      <div className="navbar-logo">
        InvestiQ-AI
      </div>

      <nav className="navbar-links">

        <Link to="/">Home</Link>

        <a href="#features">Features</a>

        {isAuthenticated && (
          <Link to="/dashboard">
            Dashboard
          </Link>
        )}

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

      </nav>

      {!isAuthenticated ? (

        <Link
          to="/register"
          className="start-btn"
        >
          Get Started
        </Link>

      ) : (

        <button
          className="start-btn"
          onClick={logout}
        >
          Logout
        </button>

      )}

    </header>
  );

};

export default Navbar;