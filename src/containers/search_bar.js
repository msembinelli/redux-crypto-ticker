import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoinListAndName } from '../actions/fetch_coin_list';
import { fetchCoinName } from '../actions/fetch_coin_name';
import { setFromSymbol, setToSymbol } from '../actions/set_symbols';
import { fetchCoinPrice, fetchCoinPriceHistorical, HISTO_TYPE } from '../actions/fetch_coin_price';
import _ from 'lodash';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {fromSymbol: 'BTC', toSymbol: 'USD'};

    this.coinSearchDebounced = _.debounce((fromSymbol) => { this.coinSearch(fromSymbol) }, 300);

    this.onInputChange = this.onInputChange.bind(this);
    this.coinSearch = this.coinSearch.bind(this);
    }

  componentWillMount() {
    this.props.fetchCoinListAndName(this.state.fromSymbol);
    this.props.setFromSymbol(this.state.fromSymbol);
    this.props.setToSymbol(this.state.toSymbol);
    this.props.fetchCoinPrice(this.state.fromSymbol, this.state.toSymbol);
    this.props.fetchCoinPriceHistorical(this.state.fromSymbol, this.state.toSymbol, this.props.historicalFormat);
  }

  onInputChange(fromSymbol) {
    this.setState({ fromSymbol: fromSymbol });
    this.coinSearchDebounced(fromSymbol);
    }

  coinSearch(fromSymbol) {
    if (fromSymbol.length < 2) {
      return;
    }
    if (this.props.coinList.Data[fromSymbol]) {
      console.log("name found ", this.props.coinList.Data[fromSymbol].CoinName);
      this.props.fetchCoinName(fromSymbol);
      this.props.setFromSymbol(fromSymbol);
      this.props.setToSymbol(this.state.toSymbol);
      this.props.fetchCoinPrice(fromSymbol, this.state.toSymbol);
      this.props.fetchCoinPriceHistorical(fromSymbol, this.state.toSymbol, this.props.historicalFormat);
    }
    console.log('name not found');
  }

  render() {
    return (
      <div className="input-group input-group-sm">
        <input
          placeholder="Enter a ticker..."
          className="form-control"
          value={this.state.fromSymbol}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

function mapStateToProps({ coinList, historicalFormat }) {
  return { coinList, historicalFormat };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoinPrice, fetchCoinPriceHistorical, fetchCoinListAndName, fetchCoinName, setToSymbol, setFromSymbol }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
