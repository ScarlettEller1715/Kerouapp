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
    console.log("hey", newTrip)
    setRawData([
      ...rawData,
      newTrip
    ])    
  }

  console.log(rawData)
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/planning" element={<Planning addNewTrip={addNewTrip}/>}>
          </Route>
          <Route exact path="/itinerary" element={<Itinerary rawData={rawData}/>}>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
