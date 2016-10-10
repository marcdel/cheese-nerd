/* @flow */
import React, { Component } from "react";

export default class CheeseDescription extends Component {
  render () {
    return (
      <p>
        {this.props.cheese.desc}
      </p>
    );
  }
}

CheeseDescription.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
