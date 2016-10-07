/* @flow */
import React, { Component } from "react";

export default class CheeseDescription extends Component {
  render () {
    return (
      <p>
        {this.props.desc}
      </p>
    );
  }
}

CheeseDescription.propTypes = {
  desc: React.PropTypes.string.isRequired
};
