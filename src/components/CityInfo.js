import React, { Component } from "react";
import { setCondition, setIcon } from "../Utils";

export default class CityInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mt-10 lg:mt-16 md:mr-10 flex flex-row items-start justify-end">
        <div className="text-white">
          <p className="text-5xl">{this.props.cityName}</p>
          <p className="md:text-right">{setCondition(this.props.icon)}</p>
        </div>

        <img
          src={setIcon(this.props.icon)}
          alt={this.props.icon}
          className="ml-5 w-24 h-24 text-white"
        />
      </div>
    );
  }
}
