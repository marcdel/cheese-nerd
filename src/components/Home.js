/* @flow */
import React, { Component } from "react";

export default class Home extends Component {
  renderCheese(key){
    var cheese = this.props.cheeses[key];

    return (
      <li key={key}>{cheese.name}</li>
    );
  }

  render () {
    return (
      <div>
        <h2>Top 10 Cheeses</h2>
        <ul>
          {Object.keys(this.props.cheeses).map(this.renderCheese.bind(this))}
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  cheeses: React.PropTypes.object.isRequired
};
