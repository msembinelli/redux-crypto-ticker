import React from 'react';
import Chart from './chart';
import * as Icon from 'react-cryptocoins';
import Refresh from '../containers/refresh'

export default (props) => {
    return (
        <div className="card no-gutter-card">
          <div className="card-block">
            <div className='row'>
              <div className='col-sm-6'>
                <Icon.Btc color='orange' size={48} />
              </div>
              <div className='col-sm-6'>
                <Refresh />
              </div>
            </div>
            <h3 className="card-title">{ props.asset }</h3>
            <h3 className="card-title">{ props.price }</h3>
          </div>
          <Chart data={ props.data } />
        </div>
    );
}
