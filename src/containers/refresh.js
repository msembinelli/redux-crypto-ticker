import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoinHistorical, HISTORICAL_FORMATS } from '../actions/fetch_coin_historical';
import { fetchCoinPrice } from '../actions/fetch_coin_price';
import { fetchCoinList } from '../actions/fetch_coin_list';
import { fetchBlockHash } from '../actions/fetch_block_hash';
import { fetchCoinName } from '../actions/fetch_coin_name';

class Refresh extends Component {
  constructor(props) {
    super(props);
    this.state = { histoFormat: HISTORICAL_FORMATS.ONE_DAY };
  }

  fetchCoinData() {
    console.log("fetching data")
    this.props.fetchCoinName(this.props.fromSymbol, this.props.coinList);
    this.props.fetchCoinHistorical(this.props.fromSymbol, this.props.toSymbol, this.state.histoFormat);
    this.props.fetchCoinPrice(this.props.fromSymbol, this.props.toSymbol);
    this.props.fetchBlockHash();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.coinList && nextProps.coinList) {
      this.fetchCoinData();
    } else {
      return;
    }

    if (this.props.coinPrice !== nextProps.coinPrice) {
      clearTimeout(this.timeout);
      this.startPoll();
    }
  }

  componentWillMount() {
    if (!this.state.coinList) {
      console.log("fetching list");
      this.props.fetchCoinList();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  startPoll() {
      this.timeout = setTimeout(() => this.fetchCoinData(), 20000);
  }

  render() { return null }
}

function mapStateToProps({coinName, coinPrice, blockHash}) {
  return { coinName, coinPrice, blockHash };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoinName, fetchCoinList, fetchCoinHistorical, fetchCoinPrice, fetchBlockHash }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Refresh);
