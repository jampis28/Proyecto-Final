import { useEffect, useState } from "react";
import "./App.css";
import Services from "./Services/Services";
import App2 from "./components/App2/App2";
import lluvia from "../weather-app-master/weather-app-master/Shower.png";
import bg from "../weather-app-master/weather-app-master/Cloud-background.png";
import nieve from "../weather-app-master/weather-app-master/Snow.png";
import location from "../weather-app-master/weather-app-master/my_location.svg";
import search from "../weather-app-master/weather-app-master/search.png";
import close from "../weather-app-master/weather-app-master/close.svg";
import navigation from "../weather-app-master/weather-app-master/navigation.svg";

function App() {
  const { data, data2, handleClick, busqueda,city,setCity,getLocationAndWeather ,fechas,chekeado,checked} = Services();
  console.log("clima hoy", data);
  console.log("clima 5 dias", data2);
  return (
    <>
      {data2 && (
        <App2
          bg={bg}
          data={data}
          data2={data2}
          click={handleClick}
          submit={busqueda}
          img={lluvia}
          location ={location}
          input={city}
          aginput ={setCity}
          fnLocation={getLocationAndWeather}
          fechas={fechas}
          buscar={search}
          modalcerrar={close}
          fnChekeado={chekeado}
          checked={checked}
          navigation={navigation}
        />
      )}
    </>
  );
}

export default App;
