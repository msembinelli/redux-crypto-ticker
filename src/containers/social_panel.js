import React, { Component } from 'react';
import { connect } from 'react-redux';

import InfoTable from '../components/info_table';

class SocialPanel extends Component {
  render() {

//TODO: Implement navigation
// Twitter, Reddit, Facebook?, StockTwits
// Sentiment index? pull from stocktwits for now

    return (
      <div className='col-lg-4'>
      <div className='card mx-auto'>
      <div className='card-header'>
        <h3 className='card-title'>Social</h3>
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a className="nav-link active" href=''>Reddit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=''>Twitter</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href=''>StockTwits</a>
          </li>
        </ul>

      </div>
        <div className='card-block card-body'>
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
