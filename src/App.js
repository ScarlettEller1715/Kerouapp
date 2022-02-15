import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Planning from "./Planning";
import Itinerary from "./Itinerary";

function App() {
  
 const [rawData, setRawData] = useState([])

 
  useEffect(() => {
    fetch('http://localhost:3000/Itinerary')
      .then(res => res.json())
      .then(data => setRawData(data))
  }, [])

  function addNewTrip(newTrip) {
    setRawData([
      ...rawData,
      newTrip
    ])    
  }

  function deleteTrip(id) {
    const updatedData = rawData.filter((trip) => {
      if (trip.id === id) {
        return null
      } else {
        return trip
      }
    })
    setRawData(updatedData)
  }
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/planning" element={<Planning addNewTrip={addNewTrip}/>}>
          </Route>
          <Route exact path="/itinerary" element={<Itinerary deleteTrip={deleteTrip} rawData={rawData}/>}>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
