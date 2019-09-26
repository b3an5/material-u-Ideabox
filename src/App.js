import React, { Component } from "react";
import "./App.css";
import Controls from "./controls.js";
import CardContainer from "./cardContainer.js";

export default class App extends Component {
  state = {
    ideas: []
  };

  submitCard = idea => {
    let card = { ...idea, id: Date.now() };

    this.setState({
      ideas: [...this.state.ideas, card]
    });
  };

  render() {
    return (
      <div className="App">
        <Controls submitCard={this.submitCard} />
        <CardContainer ideas={this.state.ideas} />
      </div>
    );
  }
}
