import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
const Weather = () => {
  const [weather, setWeather] = useState({});


 

  useEffect(() => {
    const success = (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=286d15f487a41373f770d9a24be18974`
        )
        .then((res) => setWeather(res.data));
    };

    navigator.geolocation.getCurrentPosition(success);
  }, []);

  console.log(weather);


  //295 K − 273.15 = 21,85 °C

  return (
    <Fragment>
    <div className="target">
      <h1>
        Country: {weather?.name}, {weather.sys?.country}
      </h1>
      <h1>
        <b>temp: </b>
        {weather.main?.temp}
      </h1>
      <h2>
        <b>max: </b>
        {weather.main?.temp_max}
      </h2>
      <h2>
        <b>min: </b>
        {weather.main?.temp_min}
      </h2>
      <h2>
        <b>humidity: </b>
        {weather.main?.humidity}%
      </h2>
      <button className="buttonChange" >C/F</button>
    </div>
    
    </Fragment>
  );
};

export default Weather;
