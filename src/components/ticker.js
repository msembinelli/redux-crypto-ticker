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
            <div className='col-lg-6 col-sm-12'>
                <TickerCoin {...props.tickerCoin} />
            </div>
            <div className='col-lg-6 col-sm-12' style={props.tickerStats.style}>
                <div className='row justify-content-center'>
                    {props.tickerStats.statsData.map((tableData) => {
                        return <div key={tableData[0].label + tableData[0].value} className='col-auto'><TickerStats style={props.tickerStats.style} tableData={tableData} /></div>
                    })}
                </div>
            </div>
        </div>
    );
}
