import React, { Component } from 'react';

export default class OnClickButtonGroup extends Component {
  buttonCreate(text, func) {
    return (
        <button key={text} type='button' onClick={func} className='btn btn-sm btn-light'>{text}</button>
    );
  }
  render() {
    return (
      <div className='btn-group' role='group' aria-label={this.props.label} style={{marginTop: '20px'}}>
        {this.props.buttons.map(button => this.buttonCreate(button.name, button.func))}
      </div>
    );
  }
}
