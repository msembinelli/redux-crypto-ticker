import React from 'react';
import PricePercent from './price_percent';
import Coin from './coin';
import CoinIcon from './coin_icon';
import Chart from './chart';
import * as Icon from 'react-cryptocoins';

export default (props) => {
    if (!props.symbol || !props.iconSize || !props.name || !props.percent || !props.price) {
        return(
          <h3 className='resizing-text-18-26'>Loading...</h3>
        );
    }
    return (
        <div>
            <div className='row content align-items-end'>
                <div className='col-sm-auto'>
                    <CoinIcon symbol={ props.symbol } size={ props.iconSize } />
                </div>
                <div className='col-sm-auto'>
                <Coin name={ props.name } symbol={ props.symbol } />
                <PricePercent price={ props.price } percent={ props.percent } />
                </div>
            </div>
          <Chart data={ props.data } />
        </div>
    );
}
