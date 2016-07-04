/* @flow */
import React, { Component } from "react";

import Cheese from "./Cheese";
import autobind from 'autobind-decorator';

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
        {Object.keys(this.props.cheeses).map(this.renderCheese)}
      </div>
    );
  }
}

CheeseList.propTypes = {
  cheeses: React.PropTypes.object.isRequired
};

export default autobind(CheeseList);
