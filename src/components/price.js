import React from 'react';

export default (props) => {
  if (!props.price) {
    return <div> Loading... </div>
  }
  return (
    <h3 className='card-title'>
      { props.price }
    </h3>
  );
}
