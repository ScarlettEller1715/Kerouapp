import React, { useState } from "react";
import RenderTrip from "./RenderTrip";
import ItineraryReduce from "./ItineraryReduce";


function Itinerary({ rawData, deleteTrip }) {

    const distanceArray = [0]
    const minutesArray = [0]
    const gasArray = [0]
    
    const renderedData = rawData.map((trip) => {
        return <RenderTrip origin={trip.origin}
                    destination={trip.destination}
                    distance={trip.distance}
                    totalTime={trip.totalTime}
                    timeString={trip.timeString}
                    gasCost={trip.gasCost}
                    id={trip.id}
                    deleteTrip={deleteTrip}
                    />
    })

   const sumCollection = rawData.map((trip) => {
        let distance = parseInt(trip.distance)
            distanceArray.push(distance)
        let minutes = parseInt(trip.totalTime)
            minutesArray.push(minutes)
        let gas = parseInt(trip.gasCost)
            gasArray.push(gas)
    })


    return (
        <div>
            <h1>Your Itinerary:</h1>
            {renderedData}
            {sumCollection}
            <ItineraryReduce distanceArray={distanceArray} minutesArray={minutesArray} gasArray={gasArray}/>
        </div>
    )
}

export default Itinerary;