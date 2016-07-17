/* @flow */
import React, { Component } from "react";

import SearchBar from "components/SearchBar";

export default class CheeseSearch extends Component {
  render () {
    return (
      <div>
        <SearchBar searchText={this.props.searchText} onChange={this.props.onChange} />
      </div>
    );
  }
}

CheeseSearch.propTypes = {
  searchText: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};
