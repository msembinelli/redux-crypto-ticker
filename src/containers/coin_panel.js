import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ticker from '../components/ticker'
import Refresh from '../containers/refresh';
import Chart from '../components/chart';
import OnClickButtonGroup from '../components/on_click_button_group';

class CoinPanel extends Component {
  render() {
    if (this.props.coinHistorical) {
      var closePrices = this.props.coinHistorical.Data.map( Data => Data.close);
      var chart = { data: closePrices, style: { marginTop: '20px' } };
    }

    if (this.props.coinPrice) {
      var symbol = this.props.coinPrice.RAW.BTC.USD.FROMSYMBOL;
      var price = this.props.coinPrice.DISPLAY.BTC.USD.PRICE;
      var mktcap = this.props.coinPrice.DISPLAY.BTC.USD.MKTCAP;
      var supply = this.props.coinPrice.DISPLAY.BTC.USD.SUPPLY;
      var volume = this.props.coinPrice.DISPLAY.BTC.USD.VOLUME24HOURTO;
      var percent = this.props.coinPrice.DISPLAY.BTC.USD.CHANGEPCT24HOUR;
      var open = this.props.coinPrice.DISPLAY.BTC.USD.OPEN24HOUR;
      var high = this.props.coinPrice.DISPLAY.BTC.USD.HIGH24HOUR;
      var low = this.props.coinPrice.DISPLAY.BTC.USD.LOW24HOUR;
      var tableData = [[{ label: 'Market Cap', value: mktcap },
                       { label: 'Volume (24h)', value: volume },
                       { label: 'Supply', value: supply }],
                       [{ label: 'Open', value: open },
                       { label: 'High', value: high },
                       { label: 'Low', value: low }]];

      if (this.props.coinList) {
        var name = this.props.coinList.Data[symbol].CoinName;
      } else {
        var name = this.props.coinName;
      }

      var ticker = { tickerCoin: { tickerCoinName:  { name: name, iconSize: '52px', symbol: symbol, style:  {fontSize: 'calc(18px + (22 - 18) * ((100vw - 300px) / (1600 - 300)))' } },
                                   tickerCoinPrice: { price, percent: percent, style:{fontSize: 'calc(22px + (30 - 22) * ((100vw - 300px) / (1600 - 300)))' } } },
                     tickerStats:{ statsData: tableData, style: {marginTop: '20px', fontSize: 'calc(10px + (14 - 10) * ((100vw - 300px) / (1600 - 300)))'} } }
    }

    var buttons = [{name: '1h', func: null}, {name: '1d', func: null},
                   {name: '7d', func: null}, {name: '1m', func: null},
                   {name: '3m', func: null}, {name: '6m', func: null},
                   {name: '1y', func: null}, {name: '5y', func: null},];
    var onClickButtonGroup = {buttons: buttons, style: {marginTop: '20px'}, label: 'Historical Data Button Group'};

    return (
      <div>
        <Refresh />
          <Ticker {...ticker} />
          <Chart {...chart}/>
          <OnClickButtonGroup {...onClickButtonGroup} />
        </div>
    );
  }
}

function mapStateToProps({coinName, coinList, coinHistorical, coinPrice}) {
  return { coinName, coinList, coinHistorical, coinPrice };
}

export default connect(mapStateToProps)(CoinPanel);
