import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();
  return (
    <div className="nav">
      <Link
        className={`link ${
          location.pathname === "/edson" ? "active-link" : ""
        }`}
        to="/edson"
      >
        Edson
      </Link>
      <Link
        className={`link ${
          location.pathname === "/gabriel" ? "active-link" : ""
        }`}
        to="/gabriel"
      >
        Gabriel
      </Link>
      <Link
        className={`link ${
          location.pathname === "/ladson" ? "active-link" : ""
        }`}
        to="/ladson"
      >
        Ladson
      </Link>
      <Link className="logo-link" to="/">
        {/* TODO - find out why is the relative import to ../../../public/Logo.svg not working*/}
        <img className="logo" alt="logo" src="Logo.svg" />
      </Link>
      <Link
        className={`link ${
          location.pathname === "/lailson" ? "active-link" : ""
        }`}
        to="/lailson"
      >
        Lailson
      </Link>
      <Link
        className={`link ${location.pathname === "/joba" ? "active-link" : ""}`}
        to="/joba"
      >
        Joba
      </Link>
      <Link
        className={`link ${
          location.pathname === "/willian" ? "active-link" : ""
        }`}
        to="/willian"
      >
        Willian
      </Link>
    </div>
  );
}
