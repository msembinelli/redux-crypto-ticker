import React, { Component } from 'react';
import { connect } from 'react-redux';

import InfoTable from '../components/info_table';

class SocialPanel extends Component {
  render() {

//TODO: Implement navigation
// Twitter, Reddit, Facebook?, StockTwits
// Sentiment index? pull from stocktwits for now

    return (
      <div>
        <div className='text-center resizing-text-extra-large'>Social</div>
      </div>
    );
  }
}

function mapStateToProps({coinList, coinPrice}) {
  return { coinList, coinPrice };
}

export default connect(mapStateToProps)(SocialPanel);
