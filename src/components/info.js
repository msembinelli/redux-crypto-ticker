import React from 'react';

export default (props) => {
    return (
        <div className="col-sm-6">
            <h5>{ props.label } { props.value }</h5>
        </div>
    );
}
