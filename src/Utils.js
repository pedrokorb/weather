import ClearDay from './assets/svgs/clear-day.svg'
import ClearNight from './assets/svgs/clear-night.svg'
import Rain2 from './assets/svgs/rain2.svg'
import Snow from './assets/svgs/snow.svg'
import Sleet from './assets/svgs/sleet.svg'
import Wind2 from './assets/svgs/wind2.svg'
import Fog from './assets/svgs/fog.svg'
import Cloudy from './assets/svgs/cloudy.svg'
import PartlyCloudyDay from './assets/svgs/partly-cloudy-day.svg'
import PartlyCloudyNight from './assets/svgs/partly-cloudy-night.svg'

import Rain from './assets/svgs/rain.svg'
import Humidity from './assets/svgs/humidity.svg'
import Temperature from './assets/svgs/temperature.svg'
import Wind from './assets/svgs/wind.svg'

export function convertUnixToTimestamp(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Janeiro',
    'Fevereiro', 
    'Março', 
    'Abril', 
    'Maio', 
    'Junnho', 
    'Julho', 
    'Agosto', 
    'Setembro', 
    'Outubro', 
    'Novembro', 
    'Dezembro'
  ];
  var year = a.getFullYear();  
  var month = months[a.getMonth()];
  var date = a.getDate().pad();
  var hour = a.getHours().pad();
  var min = a.getMinutes().pad();
  var sec = a.getSeconds().pad();
  var time = date + ' de ' + month + ' de ' + year + ', ' + hour + ':' + min + ':' + sec;
  return time;
}

Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) { s = "0" + s; }
  return s;
}

export function isFifteenMinutesDifferent(dateA, dateB) {
  var a = new Date(dateA * 1000);
  var yearA = a.getFullYear();
  var monthA = a.getMonth();
  var dayA = a.getDate();
  var hourA = a.getHours();
  var minA = a.getMinutes();

  var b = new Date(dateB * 1000);
  var yearB = b.getFullYear();
  var monthB = b.getMonth();
  var dayB = b.getDate();
  var hourB = b.getHours();
  var minB = b.getMinutes();
  
  var diffYear = (yearB - yearA) * 525600 //minutes in each year
  var diffMonth = (monthB - monthA) * 43800 //minutes in each month
  var diffDay = (dayB - dayA) * 1440 //minutes in each day
  var diffHour = (hourB - hourA) * 60 // minutes in each hour
  var diffMin = (minB - minA)

  var differenceInMinutes = diffYear+diffMonth+diffDay+diffHour+diffMin
  console.log("Diferença em minutos", differenceInMinutes);
  if(differenceInMinutes < 15){
    return false
  } else {
    return true
  }
}

export function setCondition(condition) {
  switch (condition) {
    case 'clear-day':
      return "Céu Limpo";
      break;
    case 'clear-night':
      return "Céu Limpo";
      break;
    case 'rain':
      return "Chuva";
      break;
    case 'snow':
      return "Neve";
      break;
    case 'sleet':
      return "Granizo";
      break;
    case 'wind':
      return "Vento";
      break;
    case 'fog':
      return "Neblina";
      break;
    case 'cloudy':
      return "Nublado";
      break;
    case 'partly-cloudy-day':
      return "Parcialmente Nublado";
      break;
    case 'partly-cloudy-night':
      return "Parcialmente Nublado";
      break;
    default:
      console.log('Sorry, we are out of ' + condition + '.');
  }
}

export function setIcon(icon) {
  switch (icon) {
    case 'clear-day':
      return ClearDay;
      break;
    case 'clear-night':
      return ClearNight;
      break;
    case 'rain':
      return Rain2;
      break;
    case 'snow':
      return Snow;
      break;
    case 'sleet':
      return Sleet;
      break;
    case 'wind':
      return Wind2;
      break;
    case 'fog':
      return Fog;
      break;
    case 'cloudy':
      return Cloudy;
      break;
    case 'partly-cloudy-day':
      return PartlyCloudyDay;
      break;
    case 'partly-cloudy-night':
      return PartlyCloudyNight;
      break;
    case 'Rain':
      return Rain;
      break;
    case 'Temperature':
      return Temperature;
      break;
    case 'Humidity':
      return Humidity;
      break;
    case 'Wind':
      return Wind;
      break;
    default:
      console.log('Sorry, we are out of ' + icon + '.');
  }
}

export function setBgClass(condition){
  if(condition === 'clear-day'){
    return 'bg-gradient-blue'
  } else {
    return 'bg-gradient-dark'
  }
}

export function setBgCardClass(condition) {
  if (condition === 'clear-day') {
    return 'block-card p-8 bg-blue-500 rounded-lg shadow text-gray-300'
  } else {
    return 'block-card p-8 bg-gray-600 rounded-lg shadow text-gray-300'
  }
}