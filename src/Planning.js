import React, { useState } from "react";
import APIForm from "./APIForm";

function Planning({ addNewTrip }) {
    
    
    return (
        <div>
            <h1>Where do you want to go?</h1>
            <div>
                <APIForm addNewTrip={addNewTrip}/>
            </div>
        </div>
    )
}

export default Planning;