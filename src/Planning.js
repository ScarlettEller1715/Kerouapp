import React, { useState } from "react";
import APIForm from "./APIForm";

function Planning({ addNewTrip }) {

    return (
        <div className="planningPage">
            <h1 className="start-adventure">Mapping your journey...</h1>
            <div>
                <APIForm addNewTrip={addNewTrip}
                />
            </div>
        </div>
    )
}

export default Planning;