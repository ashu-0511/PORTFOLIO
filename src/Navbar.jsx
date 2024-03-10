import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <nav>
                <div className="left logo"><Link to="/">Ashutosh.N</Link> </div>
                <div className="right">
                    <ul>
                        <li><Link to="/" href="">Home</Link> </li>
                        <li><Link to="/About" >About</Link> </li>
                        <li><Link to="/Project" href="">Projects</Link> </li>
                        <li><Link to="/Education">Education</Link> </li>
                        <li><Link to="/Contact">Contact Me</Link> </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;