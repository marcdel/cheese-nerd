/* @flow */
import React, { Component } from "react";

import CheeseList from '../components/CheeseList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Top Cheeses</h2>
        <CheeseList cheeses={this.props.cheeses} cheeseClicked={this.props.cheeseClicked} />
      </div>
    );
  }
}

Home.propTypes = {
  cheeses: React.PropTypes.object.isRequired,
  cheeseClicked: React.PropTypes.func.isRequired,
};
