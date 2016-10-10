/* @flow */
import React, { Component } from "react";

import CheeseTitle from "./CheeseTitle";
import CheeseImage from "./CheeseImage";
import CheeseDescription from "./CheeseDescription";

export default class CheeseDetail extends Component {
  render () {
    const cheese = this.props.cheese;

    return (
      <div>
        <CheeseTitle cheese={cheese} />
        <CheeseImage cheese={cheese} />
        <CheeseDescription cheese={cheese} />
      </div>
    );
  }
}

CheeseDetail.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
