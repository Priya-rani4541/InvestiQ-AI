import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        InvestiQ-AI
      </div>

      <nav className="navbar-links">
        <Link to="/">Home</Link>

        <a href="#features">Features</a>

        <Link to="/dashboard">Dashboard</Link>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </nav>

      <Link
        to="/dashboard"
        className="start-btn"
      >
        Get Started
      </Link>
    </header>
  );
};

export default Navbar;