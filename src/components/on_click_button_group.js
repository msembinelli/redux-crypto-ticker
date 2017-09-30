import React from 'react';

export default (props) => {
    return (
      <div className='row justify-content-center' style={props.style}>
        {props.buttons.map(button => { return <button key={button.name} type='button' onClick={button.func} className='btn btn-sm btn-dark waves-light waves-effect'>{button.name}</button> })}
      </div>
    );
}
