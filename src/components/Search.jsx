import React, {useState} from "react";

const Search = (props) => {

  const {
    searchMovies = Function.prototype,
  } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handlekey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search,type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);

  };

    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Search"
            type="search"
            className="validate"
            value={search}
            onChange={(e) => setSearch(e.target.value )}
            onKeyDown={handlekey}
            
          />
          <button
            className="btn search-btn"
            onClick={() => searchMovies(search, type)}
          >
            Search
          </button>
        </div>
        <label>
          <input
            onChange={handleFilter}
            className="with-gap"
            name="group1"
            type="radio"
            data-type="all"
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            onChange={handleFilter}
            className="with-gap"
            name="group1"
            type="radio"
            data-type="movie"
            checked={type === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            onChange={handleFilter}
            className="with-gap"
            name="group1"
            type="radio"
            data-type="series"
            checked={type === 'series'}
          />
          <span>Series only</span>
        </label>
      </div>
    );
  }


export { Search };
