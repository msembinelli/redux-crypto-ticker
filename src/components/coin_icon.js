import React from 'react';
import * as Icon from 'react-cryptocoins';

export default (props) => {
    var fromSymbolFirstLetterCapitalized = props.fromSymbol.charAt(0).toUpperCase() + props.fromSymbol.slice(1).toLowerCase();
    var DynamicCoinIcon = Icon[fromSymbolFirstLetterCapitalized];
    if (!Icon[fromSymbolFirstLetterCapitalized]) {
        return (<div></div>);
    }
    return (
      <DynamicCoinIcon className={props.fromSymbol.toUpperCase()} size={props.iconSize} />
    );
}
