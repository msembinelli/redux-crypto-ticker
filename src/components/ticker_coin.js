import React from 'react';
import PricePercent from './price_percent';
import CoinName from './coin_name';
import CoinIcon from './coin_icon';

export default (props) => {
  return (
    <div className='col-auto'>
        <div className='row align-items-end'>
            <div className='col-auto'>
                <CoinIcon symbol={ props.symbol } size={ props.iconSize } />
            </div>
            <div className='col-auto'>
                <CoinName name={ props.name } symbol={ props.symbol } />
                <PricePercent price={ props.price } percent={ props.percent } />
            </div>
        </div>
    </div>
  );
}
