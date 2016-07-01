/* @flow */
import React, { Component } from "react";

export default class Cheese extends Component {
  render () {
    var cheese = this.props.cheese;

    return (
      <div>
        <img src={cheese.image} alt={cheese.name} />
        <h3>
          {cheese.name}
        </h3>
        <p>{cheese.desc}</p>
      </div>
    );
  }
}

Cheese.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
