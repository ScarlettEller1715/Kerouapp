import React from "react";

function RenderTrip({ origin, destination, distance, totalTime, timeString, gasCost, id, deleteTrip }) {
    
    function handleClick() {
        fetch(`http://localhost:3000/Itinerary/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
        .then(() => deleteTrip(id))
    }
    
    
    return (
        <div>
            <h2>{origin} to {destination}</h2>
            <h4>{timeString}</h4>
            <p>{distance} miles</p>
            <p>You will pay approximately ${gasCost} for the gas required to reach your destination.</p>
            <button onClick={handleClick}>X</button>
        </div>
    )
}

export default RenderTrip