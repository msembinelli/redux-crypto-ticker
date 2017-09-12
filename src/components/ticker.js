import React from 'react';
import Chart from './chart';

export default (props) => {
    return (
        <div className="card no-gutter-card">
          <div className="card-block">
            <h3 className="card-title">{ props.asset }</h3>
            <h3 className="card-title">{ props.price }</h3>
          </div>
          <Chart data={ props.data } />
        </div>
    );
}
