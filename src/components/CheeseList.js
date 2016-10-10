/* @flow */
import React, { Component } from "react";
import { Link } from 'react-router'
import { Grid, Row, Col } from "react-bootstrap";

import CheeseTitle from "./CheeseTitle";
import CheeseImage from "./CheeseImage";

export default class CheeseList extends Component {
  constructor() {
    super();

    this.renderCheese = this.renderCheese.bind(this);
  }

  renderCheese (key) {
    const cheese = this.props.cheeses[key];

    return (
      <Col xs={6} md={6} key={key}>
        <CheeseTitle cheese={cheese} />
        <Link to={`/cheese/${key}`}>
          <CheeseImage cheese={cheese} />
        </Link>
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
  cheeses: React.PropTypes.object.isRequired,
};
