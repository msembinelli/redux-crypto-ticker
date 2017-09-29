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
        <div>
          <div className='resizing-text-extra-large'>Blockchain</div>
          <InfoTable data={ tableBlockData } />
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
