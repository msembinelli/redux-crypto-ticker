import React from 'react';

export default (props) => {
  return (
    <div className='col-auto' style={{marginTop: '20px'}}>
        <div className='row align-items-end'>
            <div className='col-auto'>
                {props.tableData.map(tableData => { return <div key={tableData.label} style={{fontSize: '10px'}}>{tableData.label}</div> })}
            </div>
            <div className='col-auto'>
                {props.tableData.map(tableData => { return <div key={tableData.value} style={{fontSize: '10px'}}>{tableData.value}</div> })}
            </div>
        </div>
    </div>
  );
}
