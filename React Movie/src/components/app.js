import React, { Component } from 'react';
import SearchBar from '../containers/searchbar';
import Movie from '../containers/Movie';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Movie/>
      </div>
    );
  }
}
