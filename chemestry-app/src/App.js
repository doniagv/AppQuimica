import React from "react";
import ReactDOM from "react-dom";
import Example from "./components/chartEx";
import { FaTemperatureLow } from "react-icons/fa";
import { FaCloudscale } from "react-icons/fa";
import Button from "./components/button";

import Demo from "./components/barra";
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
      <div className="wrapper">
        <div className="one">
          <div className="container">
            <h2>Temperatura/Presión</h2>
            <input type="text" />
            <Demo />
          </div>
        </div>
        <div className="line-chart">
          <Example />
        </div>
        <div className="three">
          <h2>Tipo de solución</h2>
          <hr />
          <form action="" className="formulario-soluciones">
            <div className="radio">
              <div className="radio-group">
                <input type="radio" name="Solucion Real" checked="checked" />
                <label htmlFor="Solucion Real">Solución Real</label>
              </div>
              <div className="radio-group">
                <input type="radio" name="Solucion Ideal" />
                <label htmlFor="Solucion Ideal">Solución Ideal</label>
              </div>
            </div>
          </form>
        </div>
        <div className="four">
          <h2>Método</h2>
          <hr />
          <form action="" className="formulario-metodos">
            <div className="radio">
              <div className="radio-group">
                <input type="radio" name="Solucion Real" checked="checked" />
                <label htmlFor="Solucion Real">Margules</label>
              </div>
              <div className="radio-group">
                <input type="radio" name="Solucion Ideal" />
                <label htmlFor="Solucion Ideal">Wilson</label>
              </div>
              <div className="radio-group">
                <input type="radio" name="Solucion Ideal" />
                <label htmlFor="Solucion Ideal">van Laar</label>
              </div>
            </div>
          </form>
        </div>
        <div className="five">Five</div>
        <div className="six">
          <h2>Fracciones molares</h2>
          <hr />
          <div className="wrap-fracciones">
            <div>
              <Button name="Fase líquida" />
            </div>
            <div>
              <Button name="Fase gaseosa" />
            </div>
            <div>
              <Button name="Temperatura/Presión" />
            </div>
          </div>
        </div>
        <div className="seven">Seven</div>
      </div>
    </div>
  );
}

export default App;
