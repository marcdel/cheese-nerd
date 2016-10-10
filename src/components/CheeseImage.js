/* @flow */
import React, { Component } from "react";

export default class CheeseImage extends Component {
  render () {
    const cheese = this.props.cheese || {};
    return (
      <div>
        <img style={styles.image} src={cheese.image} />
      </div>
    );
  }
}

const styles = {
  image: {
    height: "300px",
    width: "300px"
  }
};

CheeseImage.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
