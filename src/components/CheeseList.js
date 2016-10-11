/* @flow */
import React, { Component } from "react";
import { Link } from 'react-router'
import { Grid, Row, Col } from "react-bootstrap";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class CheeseList extends Component {
  constructor() {
    super();

    this.renderCheese = this.renderCheese.bind(this);
  }

  renderCheese (key) {
    const cheese = this.props.cheeses[key];

    return (
      <Col key={key} sm={6} md={6}>
        <Link to={`/cheese/${key}`}>
          <Card>
            <CardMedia
              overlay={<CardTitle title={cheese.name} subtitle="Overlay subtitle" />} >
              <img src={cheese.image} />
            </CardMedia>
          </Card>
        </Link>
      </Col>
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
