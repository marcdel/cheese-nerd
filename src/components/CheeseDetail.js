/* @flow */
import React, { Component } from "react";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class CheeseDetail extends Component {
  render () {
    const cheese = this.props.cheese;

    return (
      <Card>
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

CheeseDetail.propTypes = {
  cheese: React.PropTypes.object.isRequired
};
