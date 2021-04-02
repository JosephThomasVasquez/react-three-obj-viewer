import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/upload" className="nav-link">Upload</Link>
      <h1 className="header-title">3D Viewer</h1>
    </header>
  );
};

export default Header;
