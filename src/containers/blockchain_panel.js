import React, { Component } from 'react';
import { connect } from 'react-redux';

import InfoTable from '../components/info_table';

class BlockchainPanel extends Component {
  render() {
    if (this.props.coinList) {

      if (this.props.coinPrice) {
        var symbol = this.props.coinPrice.RAW.BTC.USD.FROMSYMBOL;
        var name = this.props.coinList.Data[symbol].CoinName;
        var tableData = [{ label: 'Network Hash Rate', value: 1234567 },
                         { label: 'Block Height', value: 1234567 },
                         { label: 'Mining Difficulty', value: 1234567 }];
      }
    }

    return (
      <div className='col'>
      <div className='card'>
        <div className='card-block'>
          <InfoTable data={ tableData } />
        </div>
        <div className='card-footer'>
          <p className="card-text">
            <small className="text-muted">Updated every 20 seconds</small>
          </p>
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps({coinList, coinPrice}) {
  return { coinList, coinPrice };
}

export default connect(mapStateToProps)(BlockchainPanel);
