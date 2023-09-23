import React, { useState } from "react";
import Card from "../Card/Card";
import "./App2.css";
import Menu from "../Menu/Menu";
import { format } from "date-fns";
import Modales from "../Modales/Modales";
import Button from "react-bootstrap/Button";
function App2(props) {
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const url = "http://openweathermap.org/img/w/";
  return (
    <>
      <div className="principal">
        <div className="izquierdo">
          <img id="bgimg" src={props.bg} alt="..." />
          <div id="bg">
            <div className="busqueda">
              <Button
                id="btbuscar exampleModalToggle"
                type="button"
                className="me-2 btn"
                onClick={() => setShow(true)}
              >
                Search for Place
              </Button>
              <div id="imglocations">
                <img
                  id="imglocation"
                  src={props.location}
                  alt="location"
                  onClick={props.fnLocation}
                />
              </div>
            </div>
            <Modales
              show={show}
              onHide={() => setShow(false)}
              submit={props.submit}
              click={props.click}
              buscar={props.buscar}
              modalcerrar={props.modalcerrar}
            ></Modales>
            <div id="bgimgs">
              <img
                id="bgimg2"
                src={url + (props.data && props.data.weather[0].icon + ".png")}
                alt="..."
              />
            </div>
            <div id="tempd">
              {props.data && (
                <h1 id="temperatura">
                  {Math.round(props.data.main.temp)}
                  <p id="nomenclatura">{props.checked=="metric"?"°C":"°F"}</p>
                </h1>
              )}
            </div>
            <div className="estacion">
              <h2 id="estacioname">{props.data.weather[0].main}</h2>
            </div>
            <div className="fechaactual">
              <p>Today</p>
              <p>-</p>
              <p>
                {props.fechas.nombreDelDia6}, {props.fechas.numeroDelDia6}{" "}
                {props.fechas.Mes6}
              </p>
            </div>
            <div className="ciudad">
              <p>{props.input.toUpperCase()}</p>
            </div>
          </div>
        </div>
        <div className="Derecho">
          <div className="toogle-switch" id="button-1">
            <input type="checkbox" className="checkbox" onChange={props.fnChekeado}checked={props.checked=="metric"?false:true}/>
            <div className="knobs"onChange={props.fnChekeado}></div>
            <div className="layer"></div>
          </div>
          {props.data2 && (
            <>
              <div id="cards">
                <Card
                  dataDiasmax={Math.round(props.data2.list[1].main.temp_max)}
                  dataDiasmin={Math.round(props.data2.list[1].main.temp_min)}
                  img={url + (props.data2.list[1].weather[0].icon + ".png")}
                  nombre={props.fechas.nombreDelDia1}
                  numero={props.fechas.numeroDelDia1}
                  mes={props.fechas.Mes}
                  checked={props.checked}
                ></Card>
                <Card
                  dataDiasmax={Math.round(props.data2.list[9].main.temp_max)}
                  dataDiasmin={Math.round(props.data2.list[9].main.temp_min)}
                  img={url + (props.data2.list[9].weather[0].icon + ".png")}
                  nombre={props.fechas.nombreDelDia2}
                  numero={props.fechas.numeroDelDia2}
                  mes={props.fechas.Mes2}
                  checked={props.checked}
                ></Card>
                <Card
                  dataDiasmax={Math.round(props.data2.list[17].main.temp_max)}
                  dataDiasmin={Math.round(props.data2.list[17].main.temp_min)}
                  img={url + (props.data2.list[17].weather[0].icon + ".png")}
                  nombre={props.fechas.nombreDelDia3}
                  numero={props.fechas.numeroDelDia3}
                  mes={props.fechas.Mes3}
                  checked={props.checked}
                ></Card>
                <Card
                  dataDiasmax={Math.round(props.data2.list[25].main.temp_max)}
                  dataDiasmin={Math.round(props.data2.list[25].main.temp_min)}
                  img={url + (props.data2.list[25].weather[0].icon + ".png")}
                  nombre={props.fechas.nombreDelDia4}
                  numero={props.fechas.numeroDelDia4}
                  mes={props.fechas.Mes4}
                  checked={props.checked}
                ></Card>
                <Card
                  dataDiasmax={Math.round(props.data2.list[33].main.temp_max)}
                  dataDiasmin={Math.round(props.data2.list[33].main.temp_min)}
                  img={url + (props.data2.list[33].weather[0].icon + ".png")}
                  nombre={props.fechas.nombreDelDia5}
                  numero={props.fechas.numeroDelDia5}
                  mes={props.fechas.Mes5}
                  checked={props.checked}
                ></Card>
              </div>
              <div className="titulo">
                <h1 id="tituloh1">Today's HightLights</h1>
              </div>
              <div className="menu">
                <Menu dataDias={props.data} checked={props.checked}></Menu>
              </div>
            </>
          )}
          <div className="footer">
            <p>created by Jean Pierre Ramos Gomez - devChallenges.io</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App2;
