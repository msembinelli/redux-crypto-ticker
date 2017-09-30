import React from 'react';

export default (props) => {
  return (
      <div className='row' style={props.style}>
          <div className='col-auto'>
              {props.tableData.map(tableData => { return <div key={tableData.label}><b>{tableData.label}</b></div> })}
          </div>
          <div className='col-auto'>
              {props.tableData.map(tableData => { return <div key={tableData.value}>{tableData.value}</div> })}
          </div>
      </div>
  );
}
