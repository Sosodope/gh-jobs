import React from "react";

const Search = props => {
  return (
    <div className="search">
      <form className="search-form" onSubmit={this.handleSearch}>
        <input
          type="text"
          name="keyword"
          placeholder="keyword"
          onChange={this.handleChange}
        />
        <button className="search-button" onClick={this.handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
