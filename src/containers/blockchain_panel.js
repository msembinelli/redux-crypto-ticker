import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBlockHash, fetchBlockInfo, fetchBlockHashAndInfo } from '../actions/fetch_block_hash_and_info';
import InfoTable from '../components/info_table';

class BlockchainPanel extends Component {

  componentWillMount() {
    this.props.fetchBlockHashAndInfo();
  }

  render() {
    if (this.props.blockHash) {

      var tableBlockData = [{ label: 'Block Hash', value: this.props.blockHash },
                       { label: '# of Transactions', value: 48153 },
                       { label: 'Block Height', value: 48153 },
                       { label: 'Mined By', value: 'Slushpool' },
                       { label: 'Reward', value: '12.5 BTC' },
                       { label: 'Timestamp', value: 1234567 }
                     ];
    }

    return (
      <div className='col-lg-4'>
        <div className='card mx-auto'>
          <div className='card-header'>
            <div className='card-title resizing-text-extra-large'>Stats</div>
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active resizing-text-medium" href="#">Latest Block</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link resizing-text-medium" href="#">Blockchain</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link resizing-text-medium" href="#">Network</a>
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

function mapStateToProps({blockHash, blockInfo}) {
  return { blockHash, blockInfo };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBlockHash, fetchBlockHash, fetchBlockHashAndInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockchainPanel);
