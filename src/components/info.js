import React from 'react';

export default (props) => {
    return (
        <div className="card no-gutter-card no-border">
          <div className="card-block">
            <h5 className="card-title">{ props.label1 } { props.value1 }</h5>
            <h5 className="card-title">{ props.label2 } { props.value2 }</h5>
          </div>
        </div>
    );
}
