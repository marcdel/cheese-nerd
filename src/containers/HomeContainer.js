/* @flow */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router'
import { connect } from "react-redux";
import Helmet from "react-helmet";

import { LOG_TEST, test } from '../actions/home';
import Home from "components/Home";

export class HomeContainer extends Component {
  /**
   * Called by ReactRouter before loading the container. Called prior to the
   * React life cycle so doesn't have access to component's props or state.
   *
   * @param {Object} store redux store object
   * @param {Object} renderProps render properties returned from ReactRouter
   * @param {Object} query location data
   * @param {Object} serverProps server specific properties
   * @param {Boolean} serverProps.isServer method running on server or not
   * @param {Request} [serverProps.request] express request if isServer
   *
   * @return {(Promise|undefined)} If this method returns a promise, the router
   * will wait for the promise to resolve before the container is loaded.
   */
  static gsBeforeRoute (/* {dispatch}, renderProps, query, serverProps */) {}

  cheeseClicked (cheeseId) {
    this.props.test("Hello");

    this.props.router.push(`/cheese/${cheeseId}`);
  }

  render () {
    return (
      <div>
        <Helmet title="HomeContainer"/>
        <Home cheeses={this.props.cheeses} cheeseClicked={this.cheeseClicked.bind(this)} />
      </div>
    );
  }
}

export const topCheeseFilter = (cheeses) => {
  return Object.keys(cheeses).sort(function(a, b){
    a = cheeses[a].rating;
    b = cheeses[b].rating;
    return ((a > b) ? -1 : ((a < b) ? 1 : 0));
  }).slice(0, 4).reduce(function(result, key){
    result[key] = cheeses[key];
    return result;
  }, {});
}

const mapStateToProps = (state) => {
  return {
    cheeses: topCheeseFilter(state.app.cheeses)
  }
}

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({test}, dispatch)
)(withRouter(HomeContainer));
