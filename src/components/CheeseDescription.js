/* @flow */
import React, { Component } from "react";

export default class CheeseDescription extends Component {
  render () {
    const cheese = this.props.cheese || {};
    return (
      <p>
        {cheese.desc}
      </p>
    );
  }
}

CheeseDescription.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
