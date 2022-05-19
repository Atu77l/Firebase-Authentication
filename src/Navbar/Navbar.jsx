import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { FaHome } from "react-icons/fa";

const Navbar = () => {
    return (
  <div classname="navbar">
  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item active">
        <Link class="nav-link" to='/dashboard'><FaHome/></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to='/notes'>Notes</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to='/calculator'>Calculator</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to='/game'>Game</Link>
      </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
};

export default Navbar;

