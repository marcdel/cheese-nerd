/* @flow */
import React, { Component } from "react";

export default class SearchBar extends Component {
  onChange () {
    this.props.onChange(this.refs.searchBarInput.value);
  }

  render () {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search..." ref="searchBarInput" onChange={this.onChange.bind(this)} />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};
