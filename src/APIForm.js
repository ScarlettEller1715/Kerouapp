import React, {useEffect, useState} from "react";

function APIForm() {
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [calculatedDistance, setCalculatedDistance] = useState("")
    const [calculatedDuration, setCalculatedDuration] = useState("")
    // const [calculatedFuelCost, setCalculatedFuelCost] = useState("")
    const [currentPriceNumber, setCurrentPriceNumber] = useState("")
    const [currentPriceString, setCurrentPriceString] = useState("")
    // const [currentDate, setCurrentDate] = useState("")
    const [returnedDistance, setReturnedDistance] = useState("")

    const avgMilesPerGallon = 25.7
    const tripPrice = (returnedDistance/avgMilesPerGallon)*currentPriceNumber

        useEffect(() => {
        fetch("https://api.eia.gov/series/?api_key=QDdUFp8c0TXy0EpJULD8MMXCYcpCogoe0OW87p7x&series_id=PET.EMM_EPM0_PTE_NUS_DPG.W")
        .then((res) => res.json())
        .then((data) => workWithFuelData(data))
        }, []);

        function workWithFuelData(fuelData) {
            console.log(fuelData)

            const currentWeek = fuelData.series[0].data[0][0]
            console.log(currentWeek)

            const dateString = currentWeek;
            const year = +dateString.substring(0, 4);
            const month = +dateString.substring(4, 6);
            const day = +dateString.substring(6, 8);

            const date = new Date(year, month - 1, day);
            console.log(date)

            const currentPrice = fuelData.series[0].data[0][1]
            setCurrentPriceNumber(currentPrice)

            const price = `$ ${currentPrice.toFixed(2)} per gallon`
            setCurrentPriceString(price)
        }



    function handleFormSubmit(e) {
        e.preventDefault()

    fetch(`http://dev.virtualearth.net/REST/v1/Routes?wayPoint.0=${origin}&Waypoint.1=${destination}&distanceUnit=mi&key=Ai0Xpx5Q7OjkahP5SvkQXU_7RbKxnsjwr7uguMI4UDBXoioYTfERREvHKS7brxbt`)

    .then((res) => res.json())
    .then((allData) => workWithTravelData(allData))
    }

    function workWithTravelData(travelData) {
    console.log(travelData)

    const returnedDistance = travelData.resourceSets[0].resources[0].travelDistance
    console.log(returnedDistance)
    setReturnedDistance(returnedDistance)

    const calculatedDistance = `${Math.round(returnedDistance)} Miles`
    console.log(calculatedDistance)
    setCalculatedDistance(calculatedDistance)

    const returnedDuration = travelData.resourceSets[0].resources[0].travelDuration

    const calculatedDuration = `${Math.round(returnedDuration/60)} Minutes`
    setCalculatedDuration(calculatedDuration)
    }


    return (
        <div>
        <form onSubmit={handleFormSubmit}>
            <h3>Use this form to calculate trip distance and fuel costs for a leg of your trip</h3>
            <input
            type="text"
            name={origin}
            placeholder="Origin"
            onChange={(e) => setOrigin(e.target.value)}
            />
            <br />
            <input type="text"
            name={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Destination"
            />
            <br />
            <input
            type="submit"
            name="submit"
            value="Calculate New Trip Leg"
            className="submit"
          />
        </form>
        <br />

        <table>
            <thead>
            <tr>
            <th>Avg. Fuel Economy MPG</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>{avgMilesPerGallon}</td>
            </tr>
            </tbody>
        </table>
        <br />

        <table>
            <thead>
            <tr>
            <th>Avg. US Price of Gasoline This Week</th>
            {/* <th>As of:</th> */}
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>{currentPriceString}</td>
            {/* <td>date</td> */}
            </tr>
            </tbody>
        </table>
        <br />

        <table>
        <thead>
        <tr>
        <th>Origin</th>
        <th>Destination</th>
        <th>Total Distance</th>
        <th>Driving Time</th>
        <th>Avg.Fuel Economy MPG</th>
        <th>Fuel costs</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>{origin}</td>
        <td>{destination}</td>
        <td>{calculatedDistance}</td>
        <td>{calculatedDuration}</td>
        <td>25.7</td>
        <td>$ {tripPrice.toFixed(2)}</td>
        </tr>
        </tbody>
        </table>
    </div>

    )
}

export default APIForm;