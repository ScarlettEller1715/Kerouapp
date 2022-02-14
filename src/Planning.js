import React, { useState } from "react";
import APIForm from "./APIForm";
import ManualForm from "./ManualForm";

function Planning({ addNewTrip }) {
    
    const [showForm, setShowForm] = useState(false)
    
    function showManualForm() {
        setShowForm(!showForm)
    }
    
    
    return (
        <div>
            <h1>Where do you want to go?</h1>
            <div>
                <APIForm />
            </div>
            <button onClick={showManualForm}>Enter your intinerary manually!</button>
            <div className={showForm ? "form" : "hidden"}>
                <ManualForm addNewTrip={addNewTrip} />
            </div>
        </div>
    )
}

export default Planning;