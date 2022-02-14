import react from "react";

function ManualForm({ addNewTrip }) {
    
    function handleSubmit(e) {
        e.preventDefault()
        const newTrip = {
        "origin": e.target.origin.value,
        "destination": e.target.destination.value,
        "distance": e.target.distance.value,
        "timeInHrs": e.target.hrs.value,
        "timeInMins": e.target.mins.value,
        "gasCost": e.target.gasCost.value
        }
        fetch("http://localhost:3000/Itinerary", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTrip)
        }).then(res => res.json())
        .then(() => console.log("done!"))
        addNewTrip(newTrip)
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="origin" placeholder="Origin"/>
            <input type="text" name="destination" placeholder="Destination"/>
            <input type="text" name="distance" placeholder="Distance in Miles"/>
            <input type="text" name="hrs" placeholder="Hours to Destination"/>
            <input type="text" name="mins" placeholder="Minutes to Destination" />
            <input type="text" name="gasCost" placeholder="Cost of Gas"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ManualForm;