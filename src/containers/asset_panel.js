import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ticker from '../components/ticker'
import Info from '../components/info'
import Refresh from '../containers/refresh';

// TODO: Replace placeholder text with data API (coinmarketcap)

// Charts to implement:
// 1h - sampled every minute (60m) / aggregate 2 == 30 samples
// 6h - sampled every minute (360m) / aggregate 12 == 30 samples
// 1d - sampled every hour (24h) / aggregate 1 == 24 samples
// 5d - sampled every hour (120h) / aggregate 4 == 30 samples
// 1m - sampled every day (30d) / aggregate 1 = 30 samples
// 3m - sampled every day (90d) / aggregate 3 = 30 samples
// 6m - sampled every day (180d) / aggregate 6 = 30 samples
// 1y - sampled every day (360d) / aggregate 12 = 30 samples
// Note: data can be aggregated so that we can have the same number of samples
// on every request.

class AssetPanel extends Component {
  render() {
    if (this.props.asset.length < 1) {
      var price = 'Loading...';
    }
    else {
      var price = '$' + this.props.asset[0][0].price_usd;
    }

    if (this.props.asset_historical.length > 0) {
      var close_prices = this.props.asset_historical[0].Data.map( Data => Data.close);
    }
    
    return (
      <div className='card'>
        <Ticker
        asset='Bitcoin (BTC)'
        price={price}
        data={ close_prices } />
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

function mapStateToProps({asset, asset_historical}) {
  return { asset, asset_historical };
}

export default connect(mapStateToProps)(AssetPanel);
