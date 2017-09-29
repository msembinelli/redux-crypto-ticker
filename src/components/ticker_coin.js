import React from 'react';
import PricePercent from './price_percent';
import CoinName from './coin_name';
import CoinIcon from './coin_icon';

export default (props) => {
  return (
    <div className='col-auto'>
        <div className='row align-items-end'>
            <div className='col-auto'>
                <CoinIcon {...props} />
            </div>
            <div className='col-auto'>
                <CoinName {...props} />
                <PricePercent {...props} />
            </div>
        </div>
    </div>
  );
}
