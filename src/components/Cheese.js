/* @flow */
import React, { Component } from "react";
import Radium from "radium";

export default class Cheese extends Component {
  render () {
    var cheese = this.props.cheese;

    return (
      <div>
        <h3>
          {cheese.name}
        </h3>
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

export default Radium(Cheese);
