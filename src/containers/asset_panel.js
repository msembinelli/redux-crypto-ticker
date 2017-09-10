import React, { Component } from 'react';
import { connect } from 'react-redux';

class AssetPanel extends Component {
  render() {
    return (
      
    );
  }
}

function mapStateToProps({asset}) {
  return { asset };
}

export default connect(mapStateToProps)(AssetPanel);
