/* @flow */
import React, { Component } from "react";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class CheeseDetail extends Component {
  render () {
    const cheese = this.props.cheese;

    return (
      <Card style={styles.card}>
        <CardMedia>
          <img src={cheese.image} />
        </CardMedia>
        <CardTitle title={cheese.name} />
        <CardText>{cheese.desc}</CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    );
  }
}

const styles = {
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    minWidth: '300px',
    maxWidth: '1200px'
  }
};

CheeseDetail.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
