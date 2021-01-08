import React from "react";
import "./style.css";



function Nav() {
    return (
        <div>
             <nav className ="navbar navbar-expand-lg">
            <a className="navbar-brand">
                <h2>Google Book Club</h2>
            </a>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Search Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/saved"> Saved Books</a>
                    </li>
                </ul>
            </div>
        </nav>

        </div>
       
    )
}

export default Nav;