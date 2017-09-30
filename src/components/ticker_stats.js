import React from 'react';

export default (props) => {
  return (
    <div className='col-auto' style={props.style}>
      <div className='row align-items-end'>
          <div className='col-auto'>
              {props.tableData.map(tableData => { return <div key={tableData.label}>{tableData.label}</div> })}
          </div>
          <div className='col-auto'>
              {props.tableData.map(tableData => { return <div key={tableData.value}>{tableData.value}</div> })}
          </div>
      </div>
    </div>
  );
}
