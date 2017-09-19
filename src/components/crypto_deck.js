import React, { Component } from 'react';
import CoinPanel from '../containers/coin_panel';
import BlockchainPanel from '../containers/blockchain_panel';

export default (props) => {
    return (
      <div className='card-deck'>
        <CoinPanel />
        <BlockchainPanel />
      </div>
    );
}
