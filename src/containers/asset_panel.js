import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ticker from '../components/ticker'
import Info from '../components/info'

class AssetPanel extends Component {
  render() {
    return (
      <div>
        <Ticker />
        <div className="card-group">
          <Info />
          <Info />
        </div>
      </div>
    );
  }
}

function mapStateToProps({asset}) {
  return { asset };
}

export default connect(mapStateToProps)(AssetPanel);
