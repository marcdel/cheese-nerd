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
      <Col key={key} sm={6} md={4} style={styles.col}>
        <Card>
          <Link to={`/cheese/${key}`}>
            <CardMedia
              overlay={<CardTitle title={cheese.name} subtitle="Overlay subtitle" />} >
              <img src={cheese.image} />
            </CardMedia>
          </Link>
        </Card>
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

const styles = {
  col: {
    margin: '0 2rem 2rem 2rem'
  }
};

CheeseList.propTypes = {
  cheeses: React.PropTypes.object.isRequired,
};
