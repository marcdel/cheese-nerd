/* @flow */
import React, { Component } from "react";
import Radium from "radium";

import CheeseTitle from "./CheeseTitle";
import CheeseImage from "./CheeseImage";
import CheeseDescription from "./CheeseDescription";

export default class Cheese extends Component {
  render () {
    var cheese = this.props.cheese;

    return (
      <div>
        <CheeseTitle title={cheese.name} />
        <CheeseImage image={cheese.image} />
        <CheeseDescription desc={cheese.desc} />
      </div>
    );
  }
}

Cheese.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
