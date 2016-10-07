/* @flow */
import React, { Component } from "react";
import Radium from "radium";

import CheeseTitle from "./CheeseTitle";
import CheeseImage from "./CheeseImage";

export default class Cheese extends Component {
  render () {
    var cheese = this.props.cheese;

    return (
      <div>
        <CheeseTitle title={cheese.name} />
        <CheeseImage image={cheese.image} />
        <p>{cheese.desc}</p>
      </div>
    );
  }
}

Cheese.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
