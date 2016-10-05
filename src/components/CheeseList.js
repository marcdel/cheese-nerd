/* @flow */
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Cheese from "./Cheese";

export default class CheeseList extends Component {
  renderCheese (key) {
    var cheese = this.props.cheeses[key];

    return (
      <Col xs={6} md={6} key={key} onClick={this.props.onCheeseSelected.bind(this, key)}>
        <Cheese cheese={cheese} />
      </ Col>
    );
  }

  render () {
    return (
      <Grid>
        <Row className="show-grid">
          {Object.keys(this.props.cheeses).map(this.renderCheese.bind(this))}
        </Row>
      </Grid>
    );
  }
}

CheeseList.propTypes = {
  cheeses: React.PropTypes.object.isRequired,
  onCheeseSelected: React.PropTypes.func.isRequired,
};
