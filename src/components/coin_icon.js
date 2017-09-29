import React from 'react';
import * as Icon from 'react-cryptocoins';

export default (props) => {
    var symbolFirstLetterCapitalized = props.symbol.charAt(0).toUpperCase() + props.symbol.slice(1).toLowerCase();
    var DynamicCoinIcon = Icon[symbolFirstLetterCapitalized];
    return (
      <DynamicCoinIcon className={props.symbol.toUpperCase()} size={props.iconSize} />
    );
}
