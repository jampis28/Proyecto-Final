import React from "react";
import Card from "../Card/Card";
import "./App2.css";
import Menu from "../Menu/Menu";
import { format } from "date-fns";
function App2(props) {
  const fechanumero = props.data2.list[1].dt_txt;
  const fecha = new Date(fechanumero);
  const nombreDelDia1 = format(fecha, "EE");
  const numeroDelDia1 = fecha.getDate();
  const Mes = fecha.toLocaleDateString("es-ES", { month: "short" });

  const fechanumero2 = props.data2.list[9].dt_txt;
  const fecha2 = new Date(fechanumero2);
  const nombreDelDia2 = format(fecha2, "EE");
  const numeroDelDia2 = fecha2.getDate();
  const Mes2 = fecha2.toLocaleDateString("es-ES", { month: "short" });

  const fechanumero3 = props.data2.list[17].dt_txt;
  const fecha3 = new Date(fechanumero3);
  const nombreDelDia3 = format(fecha3, "EE");
  const numeroDelDia3 = fecha3.getDate();
  const Mes3 = fecha3.toLocaleDateString("es-ES", { month: "short" });

  const fechanumero4 = props.data2.list[25].dt_txt;
  const fecha4 = new Date(fechanumero4);
  const nombreDelDia4 = format(fecha4, "EE");
  const numeroDelDia4 = fecha4.getDate();
  const Mes4 = fecha4.toLocaleDateString("es-ES", { month: "short" });

  const fechanumero5 = props.data2.list[33].dt_txt;
  const fecha5 = new Date(fechanumero5);
  const nombreDelDia5 = format(fecha5, "EE");
  const numeroDelDia5 = fecha5.getDate();
  const Mes5 = fecha5.toLocaleDateString("es-ES", { month: "short" });

  const fecha6 = new Date();
  const nombreDelDia6 = format(fecha6, "EE");
  const numeroDelDia6 = fecha6.getDate();
  const Mes6 = fecha6.toLocaleDateString("es-ES", { month: "short" });
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
            </div>
            <div id="tempd">
              {props.data && (
                <h1 id="temperatura">
                  {Math.round(props.data.main.temp)}
                  <p id="nomenclatura">°C</p>
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
                {nombreDelDia6}, {numeroDelDia6} {Mes6}
              </p>
            </div>
            <div className="ciudad">
              <p>{(props.input)}</p>
            </div>
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
                  nombre={nombreDelDia1}
                  numero={numeroDelDia1}
                  mes={Mes}
                ></Card>
                <Card
                  dataDiasmax={Math.round(props.data2.list[9].main.temp_max)}
                  dataDiasmin={Math.round(props.data2.list[9].main.temp_min)}
                  img={props.img}
                  nombre={nombreDelDia2}
                  numero={numeroDelDia2}
                  mes={Mes2}
                ></Card>
                <Card
                  dataDiasmax={Math.round(props.data2.list[17].main.temp_max)}
                  dataDiasmin={Math.round(props.data2.list[17].main.temp_min)}
                  img={props.img}
                  nombre={nombreDelDia3}
                  numero={numeroDelDia3}
                  mes={Mes3}
                ></Card>
                <Card
                  dataDiasmax={Math.round(props.data2.list[25].main.temp_max)}
                  dataDiasmin={Math.round(props.data2.list[25].main.temp_min)}
                  img={props.img}
                  nombre={nombreDelDia4}
                  numero={numeroDelDia4}
                  mes={Mes4}
                ></Card>
                <Card
                  dataDiasmax={Math.round(props.data2.list[33].main.temp_max)}
                  dataDiasmin={Math.round(props.data2.list[33].main.temp_min)}
                  img={props.img}
                  nombre={nombreDelDia5}
                  numero={numeroDelDia5}
                  mes={Mes5}
                ></Card>
              </div>
              <div className="titulo">
                <h1 id="tituloh1">Today's HightLights</h1>
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
