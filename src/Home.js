import React from "react";
import { useNavigate } from "react-router-dom";



function Home() {

const navigate = useNavigate()

function handleClick() {
    navigate('/planning')
}

    return(
        <div className="Homepage">
            <h1 className="fade-in-text">Welcome to KerouApp</h1>
            <h2 className="fade-in-sub">Your roadtrip planning application</h2>
            <button className="fade-in-button" onClick={handleClick}>The Adventure Starts Here...</button>
        </div>
    )
}

export default Home;