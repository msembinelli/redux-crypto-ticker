import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoinHistorical, HISTORICAL_FORMATS } from '../actions/fetch_coin_historical';
import { fetchCoinPrice } from '../actions/fetch_coin_price';
import { fetchCoinList } from '../actions/fetch_coin_list';
import { fetchBlockHash } from '../actions/fetch_block_hash';

class Refresh extends Component {
  constructor(props) {
    super(props);
    // Note: this is a reactJS way of setting initial state. The redux method is to set the default state in the action reducers.
    this.state = {coinName: 'Bitcoin', histoFormat: HISTORICAL_FORMATS.ONE_DAY, fromSymbol: 'BTC', toSymbol: 'USD' };
  }

  fetchPriceAndHistorical() {
    // console.log("fetching price")
    this.props.fetchCoinHistorical(this.state.fromSymbol, this.state.toSymbol, this.state.histoFormat);
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
    this.props.fetchBlockHash();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  startPoll() {
      this.timeout = setTimeout(() => this.fetchPriceAndHistorical(), 20000);
  }

  render() { return null }
}

function mapStateToProps({coinPrice, blockHash}) {
  return { coinPrice, blockHash };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoinList, fetchCoinHistorical, fetchCoinPrice, fetchBlockHash }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Refresh);
