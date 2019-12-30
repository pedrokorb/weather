import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
      <div className="bg-gradient-blue">
        <p className="py-24 text-4xl font-bold text-white text-center">
          Carregando...
        </p>
      </div>
    );
  }
}
