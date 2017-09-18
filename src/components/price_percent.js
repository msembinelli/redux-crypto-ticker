import React from 'react';

export default (props) => {
  if (!props.price || !props.percent) {
    return <div> Loading... </div>
  }
  return (
    <div className='resizing-text-18-26'>
      { props.price } ({ props.percent }%)
    </div>
  );
}
