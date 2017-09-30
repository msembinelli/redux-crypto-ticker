import React from 'react';
import PricePercent from './price_percent';
import CoinName from './coin_name';
import CoinIcon from './coin_icon';

export default (props) => {
  return (
      <div className='row align-items-center justify-content-center text-center no-gutters'>
          <div className='col-lg-1'>
              <CoinIcon {...props.tickerCoinIcon} />
          </div>
          <div className='col-lg-4'>
              <CoinName {...props.tickerCoinName} />
          </div>
          <div className='col-lg-1'>
          </div>
          <div className='col-lg-6'>
              <PricePercent {...props.tickerCoinPrice} />
          </div>
      </div>
  );
}
