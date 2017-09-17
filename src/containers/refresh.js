import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoinHistorical, HISTO_TYPE } from '../actions/fetch_coin_historical';
import { fetchCoinPrice } from '../actions/fetch_coin_price';

class Refresh extends Component {
  constructor(props) {
    super(props);
    var myHistoType = HISTO_TYPE.HOUR;
    this.state = {asset: 'bitcoin', histoType: myHistoType, fromSymbol: 'BTC', toSymbol: 'USD', limit: '23', aggregate: '1' };

    this.onClick= this.onClick.bind(this);
    }

  onClick(event) {
    // Go and fetch coin data
    this.props.fetchCoinHistorical(this.state.histoType, this.state.fromSymbol, this.state.toSymbol, this.state.limit, this.state.aggregate);
    this.props.fetchCoinPrice(this.state.fromSymbol, this.state.toSymbol);
  }

  render() {
    return (
      <div className='clearfix'>
        <button type="button" className="btn btn-secondary pull-right" onClick={this.onClick}>
          <span className="fa fa-refresh"></span>
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoinHistorical, fetchCoinPrice }, dispatch);
}

export default connect(null, mapDispatchToProps)(Refresh);
