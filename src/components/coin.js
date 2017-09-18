import React from 'react';

export default (props) => {
  if (!props.name || !props.symbol) {
    return <div> Loading... </div>
  }
  return (
    <div className='resizing-text-18-26'>
      { props.name } ({ props.symbol })
    </div>
  );
}
