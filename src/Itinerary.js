import React from "react";
import RenderTrip from "./RenderTrip";


function Itinerary({ rawData }) {
    
    const renderedData = rawData.map((trip) => {
        return <RenderTrip origin={trip.origin}
                    destination={trip.destination}
                    distance={trip.distance}
                    hrs={trip.timeInHrs}
                    mins={trip.timeInMins}
                    gasCost={trip.gasCost}/>
    })
    
    
    return (
        <div>
            <h1>Your Itinerary:</h1>
            {renderedData}
        </div>
    )
}

export default Itinerary;