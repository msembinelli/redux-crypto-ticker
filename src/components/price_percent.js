import React from 'react';

export default (props) => {
  if (!props.price || !props.percent) {
    return <div> Loading... </div>
  }
  return (
    <h3 className='card-title'>
      { props.price } ({ props.percent }%)
    </h3>
  );
}
