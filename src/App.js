import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'moment-timezone';
import { 
  convertUnixToTimestamp, 
  isFifteenMinutesDifferent, 
  setBgClass 
  } from "./Utils"

// Components
import Loading from './components/helpers/Loading';
import Location from './components/helpers/Location';
import BlockCard from './components/BlockCard';
import CityInfo from './components/CityInfo';

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const [storeCity, setStoreCity] = useLocalStorage('city', false)
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

  let getGeolocation = async (lat, long) => {
    let key = process.env.REACT_APP_GEOLOCATION_KEY
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${key}`

    let res = await axios.get(url);
    let cityName = res.data.results[0].address_components[3].long_name + " - " + res.data.results[0].address_components[4].short_name
 
    setStoreCity(cityName)
  }

  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {      
      if(!storeWeather){
        getWeather(position.coords.latitude, position.coords.longitude);
        getGeolocation(position.coords.latitude, position.coords.longitude);
      } else if (isFifteenMinutesDifferent(lastSync/1000, Date.now()/1000)){
        getWeather(position.coords.latitude, position.coords.longitude);
        getGeolocation(position.coords.latitude, position.coords.longitude);
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
      <Location />
    )
  } else if (!weather || !storeCity){
    return(
      <Loading />
    )  
  } else {
    return (
      <div className={setBgClass(weather.currently.icon)}>
        <div
          className="container mx-auto p-3"
        >
          <CityInfo 
            icon={weather.currently.icon}
            cityName={storeCity}
          />

          <section className="card-list mt-10 md:mt-16">

            <BlockCard
              condition={weather.currently.icon}
              icon="Temperature"
              metric={weather.currently.temperature.toFixed(1)}
              unit="°C"
              description="Temperatura do ar"
            />

            <BlockCard
              condition={weather.currently.icon}
              icon="Humidity"
              metric={weather.currently.humidity.toFixed(1)}
              unit="%"
              description="Umidade Relativa do ar"
            />

            <BlockCard
              condition={weather.currently.icon}
              icon="Wind"
              metric={weather.currently.windSpeed.toFixed(0)}
              unit="m/s"
              description="Velocidade do vento"
            />

            <BlockCard
              condition={weather.currently.icon}
              icon="Rain"
              metric={weather.currently.precipIntensity.toFixed(1)}
              unit="mm"
              description="Volume de chuva na última hora"
            />

          </section>

          <p className="text-sm text-gray-700 mt-2">
            Última medição: {convertUnixToTimestamp(weather.currently.time)}
          </p>

          <p className="text-sm text-gray-700 mt-1">
            Última sincronização com a API: {convertUnixToTimestamp(lastSync / 1000)}
          </p>

          <a
            className="text-sm text-gray-700 mt-1" 
            href="https://darksky.net/poweredby/"
          >
            Powered by Dark Sky
          </a>

        </div>
      </div>
    );
  }
}

export default App;
