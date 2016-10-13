/* @flow */
import React, { Component } from "react";
import { Link } from 'react-router'
import {Card, CardMedia, CardTitle } from 'material-ui/Card';

export default class CheeseListFlex extends Component {
  constructor() {
    super();

    this.renderCheese = this.renderCheese.bind(this);
  }

  renderCheese (key) {
    const cheese = this.props.cheeses[key];

    return (
      <div key={key} style={styles.item}>
        <Card>
          <Link to={`/cheese/${key}`}>
            <CardMedia
              overlay={<CardTitle title={cheese.name} subtitle="Overlay subtitle" />} >
              <img src={cheese.image} style={styles.image} />
            </CardMedia>
          </Link>
        </Card>
      </div>
    );
  }

  render () {
    return (
        <div style={styles.list}>
          {Object.keys(this.props.cheeses).map(this.renderCheese)}
        </div>
    );
  }
}

const styles = {
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    margin: '0 2rem 2rem 2rem'
  },
  image: {
    height: '300px',
    width: '300px',
  }
};

CheeseListFlex.propTypes = {
  cheeses: React.PropTypes.object.isRequired,
};
