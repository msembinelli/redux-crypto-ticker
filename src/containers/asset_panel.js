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
        <div className='row no-pad'>
          <Info
            label1='Market Cap:'
            value1='$68,000,000,000'
            label2='Volume (24h):'
            value2='$1,570,000,000' />
          <Info
            label1='Circulating Supply:'
            value1='16,558,187'
            label2='Max Supply:'
            value2='21,000,000' />
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
