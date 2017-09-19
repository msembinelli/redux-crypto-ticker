import React from 'react';

export default (props) => {
  return (
    <div className='resizing-text-large'>
      { props.name } ({ props.symbol })
    </div>
  );
}
