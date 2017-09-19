import React from 'react';

export default (props) => {
  return (
    <div className='resizing-text-large'>
      { props.price } ({ props.percent }%)
    </div>
  );
}
