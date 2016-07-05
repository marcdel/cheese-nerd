/* @flow */
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Cheese from "./Cheese";
import autobind from 'autobind-decorator';

export default class CheeseList extends Component {
  renderCheese(key){
    var cheese = this.props.cheeses[key];

    return (
      <Col xs={6} md={6} key={key}>
        <Cheese cheese={cheese} />
      </ Col>
    );
  }

  render () {
    return (
      <Grid>
        <Row className="show-grid">
          {Object.keys(this.props.cheeses).map(this.renderCheese)}
        </Row>
      </Grid>
    );
  }
}

CheeseList.propTypes = {
  cheeses: React.PropTypes.object.isRequired
};

export default autobind(CheeseList);
