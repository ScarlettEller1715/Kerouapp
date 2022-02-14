import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Planning from "./Planning";
import Itinerary from "./Itinerary";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/planning" element={<Planning />}>
          </Route>
          <Route exact path="/itinerary" element={<Itinerary />}>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
