import React, { Component } from 'react';
import TickerCoin from './ticker_coin';
import TickerStats from './ticker_stats';
import * as Icon from 'react-cryptocoins';

export default (props) => {
    if (!props.tickerCoin || !props.tickerStats) {
        return(
          <h3>Loading...</h3>
        );
    }
    return (
        <div className='row align-items-end'>
            <TickerCoin {...props.tickerCoin} />
            {props.tickerStats.statsData.map((tableData) => { return <TickerStats style={props.tickerStats.style} key={tableData[0].label + tableData[0].value} tableData={tableData} /> })}
        </div>
    );
}
