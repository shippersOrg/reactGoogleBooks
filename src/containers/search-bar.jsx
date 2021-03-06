import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getBooks from '../actions/get-books';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'SearchBar';
    this.searchBooks = this.searchBooks.bind(this);
    this.state = {term: ""};
  }

  searchBooks(event) {
    this.props.getBooks(this.state.term);
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.searchBooks}>
          <div className="col-md-10">
            <div className="input-group">
              <input
                type="text"
                value={ this.state.term }
                className="form-control"
                placeholder="Enter search text here..."
                onChange={ (event) => this.setState({term: event.target.value}) } />
              <span className="input-group-btn">
                <button className="btn btn-secondary">Search</button>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBooks }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);