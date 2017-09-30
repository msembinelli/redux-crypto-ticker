import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBlockHash, fetchBlockInfo, fetchBlockHashAndInfo } from '../actions/fetch_block_hash_and_info';
import TickerStats from '../components/ticker_stats'

class BlockchainPanel extends Component {

  componentWillMount() {
    this.props.fetchBlockHashAndInfo();
  }

  renderTickerStats(tickerStats) {
    if (!tickerStats) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div className='row align-items-end'>
      {tickerStats.statsData.map((tableData) => { return <TickerStats style={tickerStats.style} key={tableData[0].label + tableData[0].value} tableData={tableData} /> })}
      </div>
    );
  }

  render() {
    if (this.props.blockHash) {

      var tableBlockData = [[{ label: 'Block Hash', value: this.props.blockHash },
                       { label: '# of Transactions', value: 48153 },
                       { label: 'Block Height', value: 28153 }],
                       [{ label: 'Mined By', value: 'Slushpool' },
                       { label: 'Reward', value: '12.5 BTC' },
                       { label: 'Timestamp', value: 1234567 }]];
     var tickerStats = { statsData: tableBlockData, style: {marginTop: '20px', fontSize: 'calc(10px + (14 - 10) * ((100vw - 300px) / (1600 - 300)))'} };
    }

    return (
        <div>
          <div className='resizing-text-extra-large'>Blockchain</div>
          {this.renderTickerStats(tickerStats)}
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
