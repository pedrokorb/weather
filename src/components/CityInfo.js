import React, { Component } from 'react';
import { setCondition, setIcon } from "../Utils"

export default class CityInfo extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="mt-24 md:mr-10 flex flex-row items-start justify-end">
        <div className="text-white">
          <p className="text-5xl">
            Santa Maria - RS
          </p>
          <p className="md:text-right">
            {setCondition(this.props.icon)}
          </p>
        </div>

        <img
          src={setIcon(this.props.icon)}
          className="ml-5 w-24 h-24 text-white"
        />
      </div>
    );
  }
}
