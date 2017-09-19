import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoinHistorical, HISTO_TYPE } from '../actions/fetch_coin_historical';
import { fetchCoinPrice } from '../actions/fetch_coin_price';
import { fetchCoinList } from '../actions/fetch_coin_list';

class Refresh extends Component {
  constructor(props) {
    super(props);
    var myHistoType = HISTO_TYPE.HOUR;
    this.state = {coinList: null, coinName: 'Bitcoin', histoType: myHistoType, fromSymbol: 'BTC', toSymbol: 'USD', limit: '23', aggregate: '1' };
  }

  fetchPriceAndHistorical() {
    // console.log("fetching price")
    this.props.fetchCoinHistorical(this.state.histoType, this.state.fromSymbol, this.state.toSymbol, this.state.limit, this.state.aggregate);
    this.props.fetchCoinPrice(this.state.fromSymbol, this.state.toSymbol);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.coinPrice !== nextProps.coinPrice) {
      clearTimeout(this.timeout);
      this.startPoll();
    }
  }

  componentWillMount() {
    if (!this.state.coinList) {
      // console.log("fetching list");
      this.props.fetchCoinList();
    }

    this.fetchPriceAndHistorical();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  startPoll() {
      this.timeout = setTimeout(() => this.fetchPriceAndHistorical(), 20000);
  }

  render() { return null }
}

function mapStateToProps({coinPrice}) {
  return { coinPrice };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoinList, fetchCoinHistorical, fetchCoinPrice }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Refresh);
