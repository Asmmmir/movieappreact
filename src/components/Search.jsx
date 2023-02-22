import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: 'all'
  };

  handlekey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search,this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(() => ({ type: e.target.dataset.type }), () => {

        this.props.searchMovies(this.state.search, this.state.type)

    })
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Search"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handlekey}
            
          />
          <button
            className="btn search-btn"
            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
          >
            Search
          </button>
        </div>
        <label>
          <input
            onChange={this.handleFilter}
            className="with-gap"
            name="group1"
            type="radio"
            data-type="all"
            checked={this.state.type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            onChange={this.handleFilter}
            className="with-gap"
            name="group1"
            type="radio"
            data-type="movie"
            checked={this.state.type === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            onChange={this.handleFilter}
            className="with-gap"
            name="group1"
            type="radio"
            data-type="series"
            checked={this.state.type === 'series'}
          />
          <span>Series only</span>
        </label>
      </div>
    );
  }
}

export { Search };
