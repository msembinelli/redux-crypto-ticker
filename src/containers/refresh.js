import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAsset } from '../actions/index';

class Refresh extends Component {
  constructor(props) {
    super(props);

    this.state = {asset: 'bitcoin'};

    this.onClick= this.onClick.bind(this);
    }

  onClick(event) {
    // Go and fetch asset data
    this.props.fetchAsset(this.state.asset);
    this.setState({asset: 'bitcoin'});
  }

  render() {
    return (
      <div className='clearfix'>
        <button type="button" className="btn btn-secondary pull-right" onClick={this.onClick}>
          <span className="fa fa-refresh"></span>
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAsset }, dispatch);
}

export default connect(null, mapDispatchToProps)(Refresh);
