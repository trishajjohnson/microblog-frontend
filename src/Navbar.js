import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {

    return (
        <nav className="navbar navbar-light bg-light">
            <div>
                <Link to="/" className="navbar-brand brand">
                    Microblog
                </Link>
                <p className="lead mb-0">Get in the Rithm of blogging!</p>
            </div>
            <ul className="navbar-nav flex-row">
                <li className="nav-item mr-4">
                <Link to="/" className="nav-link link">
                    Blog
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/new" className="nav-link mr-4 link">
                    Add New Post
                </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
