/* @flow */
import React, { Component } from "react";

export default class Cheese extends Component {
  render () {
    return (
      <div>
        {this.props.cheese.name}
      </div>
    );
  }
}

Cheese.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
