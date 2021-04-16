
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Find parking lots to improve in a specific area!</h4>
      Enter a location: <input value={this.state.terms} onChange={this.onChange}/>
      <button onClick={this.search}> Find Businesses </button>
    </div>)
  }
}

export default Search;