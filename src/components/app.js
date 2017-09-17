import React, { Component } from 'react';
import CoinPanel from '../containers/coin_panel';
import BlockchainPanel from '../containers/blockchain_panel';

export default class App extends Component {
  render() {
    return (
      <div><CoinPanel /></div>
//      <BlockchainPanel />
    );
  }
}
