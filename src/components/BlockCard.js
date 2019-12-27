import React, { Component } from 'react';

export default class BlockCard extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="block-card bg-blue-600 p-8 rounded shadow text-gray-300 lg:hover:z-10 lg:hover:scale-110">
        <div className="flex pb-3 mb-3 border-b border-gray-custom-200">
          <div className="flex flex-row items-baseline">
            <p className="text-4xl font-bold">
              {this.props.metric}
            </p>

            <p>
              &nbsp;{this.props.unit}
            </p>
          </div>
        </div>
        <p>
          {this.props.description}
        </p>
    </div>
    );
  }
}
