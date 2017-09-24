import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ticker from '../components/ticker'
import Refresh from '../containers/refresh';
import InfoTable from '../components/info_table';

class CoinPanel extends Component {
  render() {
    if (this.props.coinHistorical) {
      var close_prices = this.props.coinHistorical.Data.map( Data => Data.close );
    }

    if (this.props.coinPrice) {
      var fromSymbol = this.props.fromSymbol;
      var toSymbol = this.props.toSymbol;
      var price = this.props.coinPrice.DISPLAY[fromSymbol][toSymbol].PRICE;
      var mktcap = this.props.coinPrice.DISPLAY[fromSymbol][toSymbol].MKTCAP;
      var supply = this.props.coinPrice.DISPLAY[fromSymbol][toSymbol].SUPPLY;
      var volume = this.props.coinPrice.DISPLAY[fromSymbol][toSymbol].VOLUME24HOURTO;
      var percent = this.props.coinPrice.DISPLAY[fromSymbol][toSymbol].CHANGEPCT24HOUR;
      var tableData = [{ label: 'Market Cap', value: mktcap },
                       { label: 'Volume (24h)', value: volume },
                       { label: 'Supply', value: supply }];
      var name = this.props.coinName;
    }

    return (
      <div className='col-lg-4'>
      <div className='card mx-auto'>
      <Refresh />
        <Ticker
        name={ name }
        iconSize='48px'
        symbol={ fromSymbol }
        price={ price }
        percent={ percent }
        data={ close_prices } />
        <div className='card-body'>
          <InfoTable data={ tableData } />
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
