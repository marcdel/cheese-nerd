/* @flow */
import React, { Component } from "react";

export default class CheeseImage extends Component {
  render () {
    return (
      <div>
        <img style={styles.image} src={this.props.cheese.image} />
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
