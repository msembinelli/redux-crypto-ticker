import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoinListAndName } from '../actions/fetch_coin_list';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: 'BTC'};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    }

  componentWillMount() {
    this.props.fetchCoinListAndName(this.state.term);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group input-group-sm">
        <input
          placeholder="BTC"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoinListAndName }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
