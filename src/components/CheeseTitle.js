/* @flow */
import React, { Component } from "react";

export default class CheeseTitle extends Component {
  render () {
    const cheese = this.props.cheese || {};
    return (
      <h3>
        {cheese.name}
      </h3>
    );
  }
}

CheeseTitle.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
