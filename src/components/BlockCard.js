import React, { Component } from 'react';
import { setIcon, setBgCardClass } from "../Utils"

export default class BlockCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div 
        className={setBgCardClass(this.props.condition)}
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
            src={setIcon(this.props.icon)} 
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
