import React, { Component } from 'react';
import * as Icon from 'react-cryptocoins';

export default class CoinIcon extends Component {
  render() {
    var symbolFirstLetterCapitalized = this.props.symbol.charAt(0).toUpperCase() + this.props.symbol.slice(1).toLowerCase();
    var DynamicCoinIcon = Icon[symbolFirstLetterCapitalized];
    return (
      <DynamicCoinIcon className={this.props.symbol.toUpperCase()} size={this.props.size} />
    );
  }
}
