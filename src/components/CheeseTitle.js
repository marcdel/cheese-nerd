/* @flow */
import React, { Component } from "react";

export default class CheeseTitle extends Component {
  render () {
    return (
      <h3>
        {this.props.title}
      </h3>
    );
  }
}

CheeseTitle.propTypes = {
  title: React.PropTypes.string.isRequired
};
