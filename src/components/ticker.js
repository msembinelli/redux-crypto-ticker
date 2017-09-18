import React from 'react';
import PricePercent from './price_percent';
import Coin from './coin';
import CoinIcon from './coin_icon';
import Chart from './chart';
import * as Icon from 'react-cryptocoins';
import Refresh from '../containers/refresh'

export default (props) => {
    return (
        <div className="card no-gutter-card">
          <div className="card-block">
            <div className='row'>
              <div className='card-row'>
                <CoinIcon symbol={ props.symbol } size={ props.iconSize } />
                <Refresh />
              </div>
            </div>
            <Coin name={ props.name } symbol={ props.symbol } />
            <PricePercent price={ props.price } percent={ props.percent } />
          </div>
          <Chart data={ props.data } />
        </div>
    );
}
