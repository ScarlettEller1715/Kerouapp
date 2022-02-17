import React, { useState } from "react";
import APIForm from "./APIForm";

function Planning({ addNewTrip }) {

    // function setTripLeg(data, f) {
    //     console.log('Displaying Trip Leg with this data:', data)
    //     }

    return (
        <div className="planningPage">
            <h1>Start Your Adventure</h1>
            <div>
                <APIForm addNewTrip={addNewTrip}
                // setTripLeg={setTripLeg}
                />
            </div>
        </div>
    )
}

export default Planning;