/* @flow */
import React, { Component } from "react";

import Cheese from "./Cheese";

export default class CheeseList extends Component {
  renderCheese(key){
    var cheese = this.props.cheeses[key];

    return (
      <Cheese cheese={cheese} />
    );
  }

  render () {
    return (
      <div>
        <ul>
          {Object.keys(this.props.cheeses).map(this.renderCheese.bind(this))}
        </ul>
      </div>
    );
  }
}

CheeseList.propTypes = {
  cheeses: React.PropTypes.object.isRequired
};
