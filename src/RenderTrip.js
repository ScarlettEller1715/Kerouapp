import React from "react";

function RenderTrip({ origin, destination, distance, totalTime, timeString, gasCost, id, deleteTrip }) {
    
    function handleClick() {
        fetch(`http://localhost:3000/Itinerary/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
        .then(() => deleteTrip(id))
    }
    
    
    return (
        <div className="itineraryItem">
            <h2 className="tripLabel">{origin} to {destination}</h2>
            <h4 className="tripTime">{timeString}</h4>
            <p className="tripDistance">{distance} miles</p>
            <p className="tripGas">It will cost approximately ${gasCost} for the gas this trip requires.</p>
            <div className="try">
            <button className="tripDeleteButton" onClick={handleClick}>X</button>
            </div>
            <hr className="Line">
            </hr>
        </div>
    )
}

export default RenderTrip