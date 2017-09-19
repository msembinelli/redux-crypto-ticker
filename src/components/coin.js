import React from 'react';

export default (props) => {
  return (
    <div className='resizing-text-18-26'>
      { props.name } ({ props.symbol })
    </div>
  );
}
