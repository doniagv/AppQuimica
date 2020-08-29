import React from "react";
import Example from "./components/chartEx";
import { FaTemperatureLow } from "react-icons/fa";
import { FaCloudscale } from "react-icons/fa";
import Button from "./components/button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FaTemperatureLow color="#a56cc1" />
        <Button name="Temperatura" />
        <Button name="Presión" />
        <FaCloudscale color="#a56cc1" />
      </header>
      <div className="line-chart">
        <Example />
      </div>
    </div>
  );
}

export default App;
