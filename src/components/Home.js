/* @flow */
import React, { Component } from "react";

import CheeseListContainer from '../containers/CheeseListContainer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Top Cheeses</h2>
        <CheeseListContainer cheeses={this.props.cheeses} />
      </div>
    );
  }
}

Home.propTypes = {
  cheeses: React.PropTypes.object.isRequired,
};
