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
        <div className='card-title resizing-text-extra-large'>Social</div>
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a className="nav-link active resizing-text-medium" href=''>Reddit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link resizing-text-medium" href=''>Twitter</a>
          </li>

          <li className="nav-item">
            <a className="nav-link resizing-text-medium" href=''>StockTwits</a>
          </li>
        </ul>

      </div>
        <div className='card-block card-body'>
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
