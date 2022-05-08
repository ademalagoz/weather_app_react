import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login setUser={setUser} />} />
        <Route path="/weather/" element={<Weather />} />
      </Routes>
    </Router>
  );
}

export default App;
