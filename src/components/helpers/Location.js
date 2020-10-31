import React, { Component } from "react";

export default class helpers extends Component {
  render() {
    return (
      <div className="flex-col bg-gradient-blue text-center">
        <p className="pt-24 text-2xl font-bold text-white">
          Você precisa habilitar a localização no browser clicando em "Permitir"
          ou "Allow"
        </p>
      </div>
    );
  }
}
