import React from 'react';

export default (props) => {
  return (
    <div style={props.style}>
      { props.price } ({ props.percent }%)
    </div>
  );
}
