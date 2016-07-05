/* @flow */
import React, { Component } from "react";

import CheeseList from './CheeseList';

export default class Home extends Component {
  topCheeseFilter(numberToReturn) {
    var cheeses = this.props.cheeses;
    return Object.keys(cheeses).sort(function(a, b){
      a = cheeses[a].rating;
      b = cheeses[b].rating;
      return ((a > b) ? -1 : ((a < b) ? 1 : 0));
    }).slice(0, numberToReturn).reduce(function(result, key){
      result[key] = cheeses[key];
      return result;
    }, {});
  }

  render() {
    return (
      <div>
        <h2>Top 4 Cheeses</h2>
        <CheeseList cheeses={this.topCheeseFilter(4)} />
      </div>
    );
  }
}

Home.propTypes = {
  cheeses: React.PropTypes.object.isRequired
};
