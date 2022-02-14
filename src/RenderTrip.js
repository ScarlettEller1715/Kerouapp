import React from "react";

function RenderTrip({ origin, destination, distance, hrs, mins, gasCost }) {
    return (
        <div>
            <h2>{origin} to {destination}</h2>
            <h4>An estimated {hrs} hour and {mins} minute drive</h4>
            <p>{distance} miles</p>
            <p>You will pay approximately ${gasCost} for the gas required to reach your destination.</p>
        </div>
    )
}

export default RenderTrip