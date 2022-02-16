import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    
const navigate = useNavigate()

function handleClick() {
    navigate('/planning')
}
    
    return(
        <div className="Homepage">
            <h1 className="hpTitle">Welcome to KerouApp</h1>
            <h2 className="hpSub">Your roadtrip planning application</h2>
            <button className="enterButton" onClick={handleClick}>Start your adventure...</button>
        </div>
    )
}

export default Home;