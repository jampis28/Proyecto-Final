import React from "react";
import Card from "../Card/Card";
import "./App2.css";
import Menu from "../Menu/Menu";
function App2(props) {
  return (
    <>
      <div className="principal">
        <div className="izquierdo">
          <img id="bgimg" src={props.bg} alt="..." />
          <div id="bg">
            <div className="busqueda">
              <button id="btnbuscar" type="button">
                Search for Place
              </button>
              <img id="imglocation" src={props.location} alt="location" />
            </div>
            <div id="bgimgs">
              <img id="bgimg2" src={props.img} alt="..." />
            </div >
            <div id="tempd">
            {props.data && (
              <h1 id="temperatura">{Math.round(props.data.main.temp)}°C</h1>
              )}
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="Derecho">
          {props.data2 && (
            <>
              <div id="cards">
                <Card
                  dataDiasmax={Math.round(props.data2.list[1].main.temp_max)}
                  dataDiasmin={Math.round(props.data2.list[1].main.temp_min)}
                  img={props.img}
                ></Card>
                <Card
                  dataDiasmax={Math.round(props.data2.list[9].main.temp_max)}
                  dataDiasmin={Math.round(props.data2.list[9].main.temp_min)}
                  img={props.img}
                ></Card>
                <Card
                  dataDiasmax={Math.round(props.data2.list[17].main.temp_max)}
                  dataDiasmin={Math.round(props.data2.list[17].main.temp_min)}
                  img={props.img}
                ></Card>
                <Card
                  dataDiasmax={Math.round(props.data2.list[25].main.temp_max)}
                  dataDiasmin={Math.round(props.data2.list[25].main.temp_min)}
                  img={props.img}
                ></Card>
                <Card
                  dataDiasmax={Math.round(props.data2.list[33].main.temp_max)}
                  dataDiasmin={Math.round(props.data2.list[33].main.temp_min)}
                  img={props.img}
                ></Card>
              </div>
              <div className="titulo">
                <h1>Today's HightLights</h1>
              </div>
              <div className="menu">
               <Menu dataDias={props.data}></Menu>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App2;
