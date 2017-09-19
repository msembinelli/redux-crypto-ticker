import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines height={100} data={props.data}>
        <SparklinesLine color="#1c8cdc" />
        <SparklinesSpots />
      </Sparklines>
    </div>
  );
}
