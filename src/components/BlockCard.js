import React, { Component } from 'react';
import Rain from '../assets/svgs/rain.svg'
import Humidity from '../assets/svgs/humidity.svg'
import Temperature from '../assets/svgs/temperature.svg'
import Wind from '../assets/svgs/wind.svg'


export default class BlockCard extends Component {

  constructor(props) {
    super(props);
  }

  setIcon(icon){
    switch (icon) {
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
  
  render() {
    return (
      <div 
        className="block-card p-8 bg-gray-700 opacity-25 rounded-lg shadow text-gray-300 lg:hover:z-10 lg:hover:scale-110"
      >
        <div className="flex justify-between items-baseline pb-3 mb-3 border-b border-gray-custom-200">
          <div className="flex flex-row items-baseline">

            <p className="text-4xl font-bold">
              {this.props.metric}
            </p>

            <p>
              &nbsp;{this.props.unit}
            </p>
          </div>

          <img 
            src={this.setIcon(this.props.icon)} 
            className="w-12 h-12 text-white" 
          />          
        </div>
        <p>
          {this.props.description}
        </p>
    </div>
    );
  }
}
