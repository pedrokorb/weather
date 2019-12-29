import React, { Component } from 'react';
import ClearDay from '../assets/svgs/clear-day.svg'
import ClearNight from '../assets/svgs/clear-night.svg'
import Rain from '../assets/svgs/rain2.svg'
import Snow from '../assets/svgs/snow.svg'
import Sleet from '../assets/svgs/sleet.svg'
import Wind from '../assets/svgs/wind2.svg'
import Fog from '../assets/svgs/fog.svg'
import Cloudy from '../assets/svgs/cloudy.svg'
import PartlyCloudyDay from '../assets/svgs/partly-cloudy-day.svg'
import PartlyCloudyNight from '../assets/svgs/partly-cloudy-night.svg'


export default class CityInfo extends Component {

  constructor(props) {
    super(props);
  }

  setIcon(icon) {
    switch (icon) {
      case 'clear-day':
        return ClearDay;
        break;
      case 'clear-night':
        return ClearNight;
        break;
      case 'rain':
        return Rain;
        break;
      case 'snow':
        return Snow;
        break;
      case 'sleet':
        return Sleet;
        break;
      case 'wind':
        return Wind;
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
      default:
        console.log('Sorry, we are out of ' + icon + '.');
    }
  }
  
  render() {
    return (
      <div className="mt-24 md:mr-10 flex flex-row items-start justify-end">
        <div className="text-white">
          <p className="text-5xl">
            Santa Maria - RS
          </p>
          <p className="md:text-right">Ensolarado</p>
        </div>

        <img
          src={this.setIcon(this.props.icon)}
          className="ml-5 w-24 h-24 text-white"
        />
      </div>
    );
  }
}
