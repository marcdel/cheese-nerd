/* @flow */
import React, { Component, PropTypes } from "react";
import Helmet from "react-helmet";
import config from "../config/application";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class MasterLayout extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <Helmet {...config.head}/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
