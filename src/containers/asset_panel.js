import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ticker from '../components/ticker'
import Info from '../components/info'

// TODO: Replace placeholder text with data API (coinmarketcap)
class AssetPanel extends Component {
  render() {
    return (
      <div className='card'>
        <div className="card-header">
        </div>
        <Ticker
        asset='Bitcoin (BTC)'
        price='$4157 (0.69%)'
        data={ [4153, 3990, 4300, 4225, 4468] } />
        <div className='row'>
          <Info
            label='Market Cap:'
            value='$68,000,000,000' />
          <Info
            label='Volume (24h):'
            value='$1,570,000,000' />
        </div>
        <div className='row'>
          <Info
            label='Circulating Supply:'
            value='16,558,187' />
          <Info
            label='Max Supply:'
            value='21,000,000' />
        </div>
          <div className='card-footer'>
            <p className="card-text"><small className="text-muted">Last updated 2 mins ago</small></p>
          </div>
      </div>
    );
  }
}

function mapStateToProps({asset}) {
  return { asset };
}

export default connect(mapStateToProps)(AssetPanel);
