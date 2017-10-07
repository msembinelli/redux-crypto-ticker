import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ticker from '../components/ticker'
import Chart from '../components/chart';
import LoadingAnimation from 'react-loading-animation';

class CoinPanel extends Component {
  render() {
    let { fromSymbol, toSymbol, coinPrice, coinPriceHistorical, coinName } = this.props;

    if (!coinName || !fromSymbol || !coinPrice || !coinPriceHistorical || !coinPrice[fromSymbol] || !coinPrice[fromSymbol][toSymbol]) {
      return (
        <div style={{marginTop: '200px'}}><LoadingAnimation strokeWidth='3' /></div>
      );
    }

    coinPriceHistorical.map( element => element.date = new Date(element.time * 1000) );
    var chart = { data: coinPriceHistorical, style: { marginTop: '20px' } };
    var price = coinPrice[fromSymbol][toSymbol].PRICE;
    var mktcap = coinPrice[fromSymbol][toSymbol].MKTCAP;
    var supply = coinPrice[fromSymbol][toSymbol].SUPPLY;
    var volume = coinPrice[fromSymbol][toSymbol].VOLUME24HOURTO;
    var percent = coinPrice[fromSymbol][toSymbol].CHANGEPCT24HOUR;
    var open = coinPrice[fromSymbol][toSymbol].OPEN24HOUR;
    var high = coinPrice[fromSymbol][toSymbol].HIGH24HOUR;
    var low = coinPrice[fromSymbol][toSymbol].LOW24HOUR;
    var tableData = [[{ label: 'Market Cap', value: mktcap },
                     { label: 'Volume (24h)', value: volume },
                     { label: 'Supply', value: supply }],
                     [{ label: 'Open', value: open },
                     { label: 'High', value: high },
                     { label: 'Low', value: low }]];

    var name = coinName;

    var ticker = { tickerCoin: { tickerCoinName:  { name: name, fromSymbol: fromSymbol, style: {fontSize: 'calc(18px + (20 - 18) * ((100vw - 300px) / (1600 - 300)))' } },
                                 tickerCoinIcon: { iconSize: '50px', fromSymbol: fromSymbol },
                                 tickerCoinPrice: { price, percent: percent, style:{fontSize: 'calc(22px + (30 - 22) * ((100vw - 300px) / (1600 - 300)))' } } },
                   tickerStats:{ statsData: tableData, style: {marginTop: '10px', fontSize: 'calc(10px + (12 - 10) * ((100vw - 300px) / (1600 - 300)))'} } }

    return (
      <div>
          <Ticker {...ticker} />
          <Chart {...chart}/>
        </div>
    );
  }
}

function mapStateToProps({fromSymbol, toSymbol, coinName, coinPriceHistorical, coinPrice }) {
  return { fromSymbol, toSymbol, coinName, coinPriceHistorical, coinPrice };
}

export default connect(mapStateToProps)(CoinPanel);
