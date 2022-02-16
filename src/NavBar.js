import React from "react"
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <NavLink className="navlink" to="/">Home</NavLink>
                <NavLink className="navlink" to="/planning">Plan Your Trip!</NavLink>
                <NavLink className="navlink" to="/itinerary">Your Itinerary</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;