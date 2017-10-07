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
      this.props.fetchCoinPrice(fromSymbol, this.state.toSymbol);
      this.props.fetchCoinPriceHistorical(fromSymbol, this.state.toSymbol, this.props.historicalFormat);
      this.props.setFromSymbol(fromSymbol);
      this.props.setToSymbol(this.state.toSymbol);
    }
    else {
      console.log('name not found');
    }
  }

  render() {
    return (
      <div className='row align-items-center justify-content-center'>
      <div className="input-group input-group-sm col-lg-4">
        <input
          placeholder="Enter a ticker..."
          className="form-control"
          value={this.state.fromSymbol}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
      <div className="btn-group col-lg-2">
          <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Basic dropdown</button>

          <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Separated link</a>
          </div>
      </div>
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
