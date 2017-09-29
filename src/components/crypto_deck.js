import React, { Component } from 'react';
import CoinPanel from '../containers/coin_panel';
import BlockchainPanel from '../containers/blockchain_panel';
import SocialPanel from '../containers/social_panel';

export default (props) => {
    return (
      <div>
        <div>
          <CoinPanel />
          <SocialPanel />
        </div>
        <BlockchainPanel />
      </div>
    );
}
