import React from "react";

const Search = props => {
  return (
    <div className="search">
      <form className="search-form" onSubmit={props.handleSubmit}>
        <input type="text" name="jobKeyword" placeholder="keyword" />
        <button className="search-button" onClick={props.handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
