import { useEffect, useState } from "react";

function Services() {
  const [city, setCity] = useState("esmeraldas,EC");
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f884dfb11487f89e30a14b7d1d9d2d5c`
      );
      const datos = await res.json();
      setData(datos);
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=f884dfb11487f89e30a14b7d1d9d2d5c`
      );
      const datos = await res.json();
      setData2(datos);
    };

    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ciudad = e.target[0].value;
    setCity(ciudad);
  };

  const handleClick = (e) => {
    const ciudad = e.target.value;
    setCity(ciudad);
  };


  return {data, data2,handleSubmit, handleClick, city,setCity}
}

export default Services;
