import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ticker from '../components/ticker'
import Info from '../components/info'
import Refresh from '../containers/refresh';

// TODO: Replace placeholder text with data API (coinmarketcap)
class AssetPanel extends Component {
  render() {
    if (this.props.asset.length < 1) {
      var price = 'Loading...';
    }
    else {
      var price = '$' + this.props.asset[0][0].price_usd;
    }

    return (
      <div className='card'>
        <Ticker
        asset='Bitcoin (BTC)'
        price={price}
        data={ [4153, 3990, 4300, 4225, 4468] } />
        <div className='card-block'>
          <div className='row'>
            <Info
              label='Market Cap:'
              value='$68B' />
            <Info
              label='Volume (24h):'
              value='$1.5B' />
              </div>
          <div className='row'>
            <Info
              label='Circulating:'
              value='16,558,187' />
            <Info
              label='Max:'
              value='21,000,000' />
          </div>
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
