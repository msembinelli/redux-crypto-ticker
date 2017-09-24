import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrencySymbol } from '../actions/set_currency_symbol';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {fromSymbol: props.fromSymbol, toSymbol: props.toSymbol};

    this.onInputChangeFromSymbol = this.onInputChangeFromSymbol.bind(this);
    this.onInputChangeToSymbol = this.onInputChangeToSymbol.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    }

  onInputChangeToSymbol(event) {
    this.setState({ toSymbol: event.target.value });
  }

  onInputChangeFromSymbol(event) {
    this.setState({ fromSymbol: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.setCurrencySymbol(this.state.fromSymbol, this.state.toSymbol);
    this.setState({fromSymbol: '', toSymbol: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="BTC"
          className="form-control"
          value={this.state.fromSymbol}
          onChange={this.onInputChangeFromSymbol} />
        <input
          placeholder="USD"
          className="form-control"
          value={this.state.toSymbol}
          onChange={this.onInputChangeToSymbol} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCurrencySymbol }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
