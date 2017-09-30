import React from 'react';
import PricePercent from './price_percent';
import CoinName from './coin_name';
import CoinIcon from './coin_icon';

export default (props) => {
  return (
      <div className='row align-items-center justify-content-center text-center'>
          <div className='col-lg-2'>
              <CoinIcon {...props.tickerCoinName} />
          </div>
          <div className='col-lg-4'>
              <CoinName {...props.tickerCoinName} />
        </div>
          <div className='col-lg-6'>
              <PricePercent {...props.tickerCoinPrice} />
          </div>
      </div>
  );
}
