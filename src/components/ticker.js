import React from 'react';
import Price from './price';
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
              <div className='col-sm-6'>
                <CoinIcon symbol={ props.symbol } size={ props.iconSize } />
              </div>
              <div className='col-sm-6'>
                <Refresh />
              </div>
            </div>
            <Coin name={ props.name } symbol={ props.symbol } />
            <Price price={ props.price }/>
          </div>
          <Chart data={ props.data } />
        </div>
    );
}
