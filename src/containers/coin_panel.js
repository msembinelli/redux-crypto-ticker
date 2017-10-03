import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ticker from '../components/ticker'
import Chart from '../components/chart';
import LoadingAnimation from 'react-loading-animation';
import OnClickButtonGroup from '../components/on_click_button_group';

class CoinPanel extends Component {
  render() {
    let { fromSymbol, toSymbol, coinPrice, coinPriceHistorical } = this.props;

    if (!fromSymbol || !coinPrice || !coinPriceHistorical || !coinPrice[fromSymbol] || !coinPrice[fromSymbol][toSymbol]) {
      return (
        <div><LoadingAnimation /></div>
      );
    }

    this.props.coinPriceHistorical.map( element => element.date = new Date(element.time * 1000) );
    var chart = { data: this.props.coinPriceHistorical, style: { marginTop: '20px' } };
    var price = this.props.coinPrice[fromSymbol][toSymbol].PRICE;
    var mktcap = this.props.coinPrice[fromSymbol][toSymbol].MKTCAP;
    var supply = this.props.coinPrice[fromSymbol][toSymbol].SUPPLY;
    var volume = this.props.coinPrice[fromSymbol][toSymbol].VOLUME24HOURTO;
    var percent = this.props.coinPrice[fromSymbol][toSymbol].CHANGEPCT24HOUR;
    var open = this.props.coinPrice[fromSymbol][toSymbol].OPEN24HOUR;
    var high = this.props.coinPrice[fromSymbol][toSymbol].HIGH24HOUR;
    var low = this.props.coinPrice[fromSymbol][toSymbol].LOW24HOUR;
    var tableData = [[{ label: 'Market Cap', value: mktcap },
                     { label: 'Volume (24h)', value: volume },
                     { label: 'Supply', value: supply }],
                     [{ label: 'Open', value: open },
                     { label: 'High', value: high },
                     { label: 'Low', value: low }]];

    var name = this.props.coinName;

    var ticker = { tickerCoin: { tickerCoinName:  { name: name, fromSymbol: fromSymbol, style: {fontSize: 'calc(18px + (20 - 18) * ((100vw - 300px) / (1600 - 300)))' } },
                                 tickerCoinIcon: { iconSize: '50px', fromSymbol: fromSymbol },
                                 tickerCoinPrice: { price, percent: percent, style:{fontSize: 'calc(22px + (30 - 22) * ((100vw - 300px) / (1600 - 300)))' } } },
                   tickerStats:{ statsData: tableData, style: {marginTop: '10px', fontSize: 'calc(10px + (12 - 10) * ((100vw - 300px) / (1600 - 300)))'} } }

    var buttons = [{name: '1h', func: null}, {name: '1d', func: null},
                   {name: '7d', func: null}, {name: '1m', func: null},
                   {name: '3m', func: null}, {name: '6m', func: null},
                   {name: '1y', func: null}, {name: '5y', func: null},];
    var onClickButtonGroup = {buttons: buttons, style: {marginTop: '20px'}, label: 'Historical Data Button Group'};

    return (
      <div>
          <Ticker {...ticker} />
          <Chart {...chart}/>
          <OnClickButtonGroup {...onClickButtonGroup} />
        </div>
    );
  }
}

function mapStateToProps({fromSymbol, toSymbol, coinName, coinPriceHistorical, coinPrice }) {
  return { fromSymbol, toSymbol, coinName, coinPriceHistorical, coinPrice };
}

export default connect(mapStateToProps)(CoinPanel);
