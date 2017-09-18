import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ticker from '../components/ticker'
import Refresh from '../containers/refresh';
import InfoTable from '../components/info_table';

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

class CoinPanel extends Component {
  render() {
    if (this.props.coinHistorical.length > 0) {
      var close_prices = this.props.coinHistorical[0].Data.map( Data => Data.close);
    }

    if (this.props.coinPrice.length > 0) {
      var symbol = this.props.coinPrice[0].RAW.BTC.USD.FROMSYMBOL;
      var price = this.props.coinPrice[0].DISPLAY.BTC.USD.PRICE;
      var mktcap = this.props.coinPrice[0].DISPLAY.BTC.USD.MKTCAP;
      var supply = this.props.coinPrice[0].DISPLAY.BTC.USD.SUPPLY;
      var volume = this.props.coinPrice[0].DISPLAY.BTC.USD.VOLUME24HOURTO;
      var percent = this.props.coinPrice[0].DISPLAY.BTC.USD.CHANGEPCT24HOUR;
      console.log(this.props.coinPrice[0]);
      var tableData = [{
          label: 'Market Cap',
          value: mktcap,
      }, {
          label: 'Volume (24h)',
          value: volume,
      }, {
          label: 'Supply',
          value: supply,
      }];

    }

    return (
      <div className='card'>
        <Ticker
        name='Bitcoin'
        iconSize='48px'
        symbol={ symbol }
        price={ price }
        percent={ percent }
        data={ close_prices } />
        <div className='card-block'>
          <InfoTable data={ tableData } />
        </div>
        <div className='card-footer'>
          <p className="card-text"><small className="text-muted">Updated every 10 seconds</small></p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({coinHistorical, coinPrice}) {
  return { coinHistorical, coinPrice };
}

export default connect(mapStateToProps)(CoinPanel);
