import React from 'react';

export default (props) => {
    return (
      <div className='btn-group' role='group' aria-label={props.label} style={props.style}>
        {props.buttons.map(button => { return <button key={button.name} type='button' onClick={button.func} className='btn btn-sm btn-light'>{button.name}</button> })}
      </div>
    );
}
