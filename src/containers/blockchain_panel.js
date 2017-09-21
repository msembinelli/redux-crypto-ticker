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
                         { label: 'Mining Difficulty', value: 1234567 },
                         { label: 'Timestamp', value: 1234567 },
                       ];
      }
    }
// Offline Placeholders
        var tableBlockData = [{ label: 'Block Hash', value: '000000bea' },
                         { label: '# of Transactions', value: 48153 },
                         { label: 'Block Height', value: 48153 },
                         { label: 'Mined By', value: 'Slushpool' },
                         { label: 'Reward', value: '12.5 BTC' },
                         { label: 'Timestamp', value: 1234567 }
                       ];

        /* var tableData = [{ label: 'Hash Rate', value: 1234567 },
                         { label: 'Difficulty', value: 1234567 },
                         { label: 'Halving', value: '2017-10-12' },
                         { label: 'Nodes', value: 10000 },
                       ]; */
    return (
      <div className='col-lg-4'>
        <div className='card mx-auto'>
          <div className='card-header'>
            <h3 className='card-title'>Stats</h3>
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Latest Block</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Blockchain</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Network</a>
                </li>
              </ul>
          </div>
          <div className='card-body'>
            <div className='card-block'>
              <InfoTable data={ tableBlockData } />
            </div>
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
