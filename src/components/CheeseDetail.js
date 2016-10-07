/* @flow */
import React, { Component } from "react";

import Cheese from "./Cheese";

export default class CheeseDetail extends Component {
  render () {
    var cheese = this.props.cheese;

    return (
      <Cheese cheese={cheese} />
    );
  }
}

Cheese.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
