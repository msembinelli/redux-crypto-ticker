import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ticker from '../components/ticker'
import Refresh from '../containers/refresh';
import InfoTable from '../components/info_table';

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
    if (this.props.coinHistorical) {
      var close_prices = this.props.coinHistorical.Data.map( Data => Data.close);
    }

    if (this.props.coinPrice) {
      var symbol = this.props.coinPrice.RAW.BTC.USD.FROMSYMBOL;
      var price = this.props.coinPrice.DISPLAY.BTC.USD.PRICE;
      var mktcap = this.props.coinPrice.DISPLAY.BTC.USD.MKTCAP;
      var supply = this.props.coinPrice.DISPLAY.BTC.USD.SUPPLY;
      var volume = this.props.coinPrice.DISPLAY.BTC.USD.VOLUME24HOURTO;
      var percent = this.props.coinPrice.DISPLAY.BTC.USD.CHANGEPCT24HOUR;
      var tableData = [{ label: 'Market Cap', value: mktcap },
                       { label: 'Volume (24h)', value: volume },
                       { label: 'Supply', value: supply }];

      if (this.props.coinList) {
        var name = this.props.coinList.Data[symbol].CoinName;
      } else {
        var name = this.props.coinName;
      }
    }

    return (
      <div className='col-lg-4'>
      <div className='card mx-auto'>
      <Refresh />
        <Ticker
        name={ name }
        iconSize='48px'
        symbol={ symbol }
        price={ price }
        percent={ percent }
        data={ close_prices } />
        <div className='card-body'>
          <InfoTable data={ tableData } />
        </div>
        <div className='card-footer'>
          <p className="card-text">
            <small className="text-muted">Updated every 20 seconds</small>
          </p>
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps({coinName, coinList, coinHistorical, coinPrice}) {
  return { coinName, coinList, coinHistorical, coinPrice };
}

export default connect(mapStateToProps)(CoinPanel);
