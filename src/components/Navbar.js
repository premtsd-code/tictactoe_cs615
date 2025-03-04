import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-md">
    <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="main-navigation">
      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/tictactoe">TicTacToe</Link></li>
      </ul>
    </div>
    <a className="navbar-brand" href="/">Prem Palanisamy - 24250244</a>
  </nav>
);

export default Navbar;