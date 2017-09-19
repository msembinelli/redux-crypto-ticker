import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class InfoTable extends Component {
  render() {
    return (
      <BootstrapTable className='resizing-text-medium' tableHeaderClass='col-hidden' data={ this.props.data } bordered={ false } version='4'>
        <TableHeaderColumn dataField='label' isKey></TableHeaderColumn>
        <TableHeaderColumn dataField='value'></TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
