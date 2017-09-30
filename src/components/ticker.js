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
            <div className='col-xs-6 mr-auto mx-auto'>
                <TickerCoin {...props.tickerCoin} />
            </div>
            <div className='col-xs-6 mx-auto' style={props.tickerStats.style}>
                <div className='row align-items-end'>
                    {props.tickerStats.statsData.map((tableData) => { return <TickerStats style={props.tickerStats.style} key={tableData[0].label + tableData[0].value} tableData={tableData} /> })}
                </div>
            </div>
        </div>
    );
}
