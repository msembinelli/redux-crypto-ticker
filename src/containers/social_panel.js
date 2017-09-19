import React, { Component } from 'react';
import { connect } from 'react-redux';

import InfoTable from '../components/info_table';

class SocialPanel extends Component {
  render() {
    var tableData = [{ label: 'Network Hash Rate', value: 1234567 },
                     { label: 'Block Height', value: 1234567 },
                     { label: 'Mining Difficulty', value: 1234567 },
                     { label: 'Mining Difficulty', value: 1234567 },
                     { label: 'Mining Difficulty', value: 1234567 },
                     { label: 'Mining Difficulty', value: 1234567 },
                     { label: 'Mining Difficulty', value: 1234567 }];

    return (
      <div className='col-lg-4'>
      <div className='card mx-auto'>
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

export default connect(mapStateToProps)(SocialPanel);
