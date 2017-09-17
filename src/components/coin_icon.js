import React, { Component } from 'react';
import * as Icon from 'react-cryptocoins';

export default class CoinIcon extends Component {
  render() {
    if (!this.props.symbol || !this.props.size) {
      return <div>Icon not found...</div>;
    }
    var symbolFirstLetterCapitalized = this.props.symbol.charAt(0).toUpperCase() + this.props.symbol.slice(1).toLowerCase();
    var DynamicCoinIcon = Icon[symbolFirstLetterCapitalized];
    return (
      <DynamicCoinIcon size={this.props.size} />
    );
  }
}
