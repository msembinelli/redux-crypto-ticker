import React, { Component } from 'react';
import AssetPanel from '../containers/asset_panel';
import BlockchainPanel from '../containers/blockchain_panel';

export default class App extends Component {
  render() {
    return (
      <div><AssetPanel /></div>
//      <BlockchainPanel />
    );
  }
}
