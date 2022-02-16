import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    
const navigate = useNavigate()

function handleClick() {
    navigate('/planning')
}
    
    return(
        <div className="Homepage">
            <h1 className="hpTitle">Welcome to KerouacApp</h1>
            <h2>Your roadtrip planning application</h2>
            <p>Explanation paragraph goes here.</p>
            <button onClick={handleClick}>Plan Your Trip!</button>
        </div>
    )
}

export default Home;