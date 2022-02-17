import React from "react"

function ItineraryReduce({ distanceArray, minutesArray, gasArray }) {

    const distanceSum = distanceArray.reduce((prevValue, currentValue) => {
        return prevValue + currentValue
    })

    const minutesSum = minutesArray.reduce((prevValue, currentValue) => {
        return prevValue + currentValue
    })

    const gasSum = gasArray.reduce((prevValue, currentValue) => {
        return prevValue + currentValue
    })

    function minutesConversion(minutesSum) {
        const h = Math.floor(minutesSum/60)
        const m = minutesSum%60;
        return (`${h} hours and ${m} minutes`)
    }



    return (
        <div className="itineraryReduce">
            <h3 className="totalDistance">Total Distance: {distanceSum} miles</h3>
            <h3 className="totalTime">Total driving time appoximately {minutesConversion(minutesSum)}</h3>
            <h4 className="totalGas">Estimated gas costs: ${gasSum}</h4>
        </div>

    )
}

export default ItineraryReduce;