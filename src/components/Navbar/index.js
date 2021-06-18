import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/">Início</Link>
      <Link to="/edson">Edson</Link>
      <Link to="/gabriel">Gabriel</Link>
      <Link to="/ladson">Ladson</Link>
      <Link to="/lailson">Lailson</Link>
      <Link to="/joba">Joba</Link>
      <Link to="/willian">Willian</Link>
    </div>
  );
}
