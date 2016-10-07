/* @flow */
import React, { Component } from "react";
import Radium from "radium";

import CheeseTitle from "./CheeseTitle";

export default class Cheese extends Component {
  render () {
    var cheese = this.props.cheese;

    return (
      <div>
        <CheeseTitle title={cheese.name} />
        <img style={styles.image} src={cheese.image} alt={cheese.name} />
        <p>{cheese.desc}</p>
      </div>
    );
  }
}

var styles = {
  image: {
    height: "300px",
    width: "300px"
  }
};

Cheese.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
