/* @flow */
import React, { Component } from "react";

import Cheese from "./Cheese";

export default class CheeseList extends Component {
  renderCheese(key){
    var cheese = this.props.cheeses[key];

    return (
      <Cheese key={key} cheese={cheese} />
    );
  }

  render () {
    return (
      <div>
        {Object.keys(this.props.cheeses).map(this.renderCheese.bind(this))}
      </div>
    );
  }
}

CheeseList.propTypes = {
  cheeses: React.PropTypes.object.isRequired
};
