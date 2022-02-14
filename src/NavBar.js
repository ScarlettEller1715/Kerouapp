import React from "react"
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/planning">Plan Your Trip!</NavLink>
                <NavLink to="/itinerary">Your Itinerary</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;