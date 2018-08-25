import React from "react";

const Search = props => {
  return (
    <div className="search">
      <form className="search-form" onSubmit={props.getSearch}>
        <input type="text" name="searchTerm" placeholder="keyword" />
        <button className="search-button">Search</button>
      </form>
    </div>
  );
};

export default Search;
