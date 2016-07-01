/* @flow */
import React, { Component } from "react";

import CheeseList from './CheeseList';

export default class Home extends Component {
  render () {
    return (
      <div>
        <h2>Top 10 Cheeses</h2>
        <CheeseList cheeses={this.props.cheeses} />
      </div>
    );
  }
}

Home.propTypes = {
  cheeses: React.PropTypes.object.isRequired
};
