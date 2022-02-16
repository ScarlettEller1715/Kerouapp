import React, { useState } from "react";
import APIForm from "./APIForm";

function Planning({ addNewTrip }) {

function setTripLeg(data, f) {
    }
    
    return (
        <div>
            <h1>Where do you want to go?</h1>
            <div>
                <APIForm addNewTrip={addNewTrip} setTripLeg={setTripLeg}/>
            </div>
        </div>
    )
}

export default Planning;