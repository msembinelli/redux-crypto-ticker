import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  if (!props.data) {
    return <div>Loading Chart...</div>
  }
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine />
      </Sparklines>
    </div>
  );
}
