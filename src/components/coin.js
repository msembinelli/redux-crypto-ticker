import React from 'react';

export default (props) => {
  if (!props.name || !props.symbol) {
    return <div> Loading... </div>
  }
  return (
    <h3 className='card-title'>
      { props.name } ({ props.symbol })
    </h3>
  );
}
