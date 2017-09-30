import React, { Component } from 'react';
import CryptoDeck from './crypto_deck';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <SearchBar />
        <CryptoDeck />
      </div>
    );
  }
}
