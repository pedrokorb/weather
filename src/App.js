import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';
import { convertUnixToTimestamp, isFifteenMinutesDifferent } from "./Utils"
import BlockCard from './components/BlockCard';

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const [lastSync, setLastSync] = useLocalStorage('lastSync', false)
  const [storeWeather, setStoreWeather] = useLocalStorage('storeWeather', false)

  let getWeather = async (lat, long) => {
    let key = process.env.REACT_APP_DARK_SKY_KEY
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = `https://api.darksky.net/forecast/${key}/${lat},${long}`

    let res = await axios.get(proxy + url, {
      params: {
        units: 'si'
      }
    });
    setWeather(res.data);
    setStoreWeather(res.data);
    setLastSync(Date.now())
  }
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if(!storeWeather){
        getWeather(position.coords.latitude, position.coords.longitude);
      } else if (isFifteenMinutesDifferent(lastSync/1000, Date.now()/1000)){
        getWeather(position.coords.latitude, position.coords.longitude);
      } else {
        setWeather(storeWeather)
      }

      setLocation(true)
    })
  }, [])

  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });

    const setValue = value => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };

    return [storedValue, setValue];
  }

  if (!location) {
    return (
      <Fragment>
        Você precisa habilitar a localização no browser
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
      
        <p>Data e hora da medição:&nbsp; 
          <span className="text-4xl font-bold">
            {convertUnixToTimestamp(weather.currently.time)}
          </span>
        </p>
        <p>Data e hora da última sincronização com a API Darksky:&nbsp;
          <span className="text-4xl font-bold">
            {convertUnixToTimestamp(lastSync/1000)}
          </span>
        </p>

        <input
          type="text"
          placeholder="Enter your name"
          value={lastSync}
          onChange={e => setLastSync(e.target.value)}
        />

        <BlockCard
          metric={weather.currently.temperature.toFixed(1)}
          unit="°C"
          description="Temperatura do ar"
        />

        <BlockCard
          metric={weather.currently.humidity.toFixed(1)}
          unit="%"
          description="Umidade Relativa do ar"
        />

        <BlockCard
          metric={weather.currently.windSpeed.toFixed(0)}
          unit="m/s"
          description="Velocidade do vento"
        />

        <BlockCard
          metric={weather.currently.precipIntensity.toFixed(1)}
          unit="mm"
          description="Volume de chuva na última hora"
        />

      </Fragment>
    );
  }


  // return (
  //   <div className="container mx-auto p-3 text-white">
  //     <div className="home_page-header-card-list">
  //       <BlockCard 
  //         metric={weather.currently.temperature.toFixed(1)}
  //         unit="°C"
  //         description="Temperatura do ar"
  //       />
  //       {/* <BlockCard />
  //       <BlockCard /> */}
  //     </div>
  //   </div>
    
    
  // )
}

export default App;
