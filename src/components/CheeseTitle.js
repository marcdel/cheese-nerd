/* @flow */
import React, { Component } from "react";

export default class CheeseTitle extends Component {
  render () {
    return (
      <h3>
        {this.props.cheese.name}
      </h3>
    );
  }
}

CheeseTitle.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
