import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let key = process.env.REACT_APP_DARK_SKY_KEY
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = `https://api.darksky.net/forecast/${key}/${lat},${long}`
    console.log(url)

    let res = await axios.get(proxy+url, {
      params: {
        units: 'si'
      }
    });
    setWeather(res.data);    
  }
  console.log(weather)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])

  if (!location) {
    return (
      <Fragment>
        Você precisa habilitar a localização no browser o/
      </Fragment>
    )
  } else if (!weather){
    return(
      <Fragment>
        Carregando...
      </Fragment>
    )  
  } else {
    return (
      <Fragment>
        <p>
          Temperatura do ar: 
          <span className="text-4xl font-bold">
            {weather.currently.temperature} °C
          </span>
        </p>
        <p>
          Umidade Relativa do ar: 
          <span className="text-4xl font-bold">
            {weather.currently.humidity}%
          </span>
        </p>
        <p>
          Velocidade do Vento: 
          <span className="text-4xl font-bold">
            {weather.currently.windSpeed}m/s
          </span>
        </p>
        <p>Volume de Chuva (ver como calcular)</p>
        <p>Data e hora da medição: 
          <span className="text-4xl font-bold">
            {weather.currently.time}
          </span>
        </p>
        <p>Data e hora da última sincronização com a API Darksky</p>
      </Fragment>
    );
  }
}

export default App;
