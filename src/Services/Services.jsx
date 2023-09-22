import { useEffect, useState } from "react";
import axios from "axios";
function Services() {
  const [city, setCity] = useState("london");
  const [cambio, setCambio] = useState(false);
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cambio?`&lat=${location.latitude}&lon=${location.longitude}`:`${city}`}&units=metric&appid=f884dfb11487f89e30a14b7d1d9d2d5c`
      );
      const datos = await res.json();
      setData(datos);
    };

    getData();
  }, [city, location]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cambio?`&lat=${location.latitude}&lon=${location.longitude}`:`${city}`}&units=metric&appid=f884dfb11487f89e30a14b7d1d9d2d5c`
      );
      const datos = await res.json();
      setData2(datos);
    };

    getData();
  }, [city, location]);

  const busqueda = (e) => {
    setCambio(false)
    e.preventDefault();
    const ciudad = e.target[0].value;
    setCity(ciudad.toLowerCase());
  };

  const handleClick = (e) => {
    setCambio(false)
    const ciudad = e.target.value;
    setCity(ciudad.toLowerCase());
  };
  const getLocationAndWeather = () => {
    setCambio(true)
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLocation({ latitude, longitude });
        setCity(data.name)
        console.log(location);
      });
    }
  };
  return {
    data,
    data2,
    busqueda,
    handleClick,
    city,
    setCity,
    getLocationAndWeather,
  };
}

export default Services;
