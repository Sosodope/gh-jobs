import React, { Component } from "react";
import Listings from "./components/Listings";
import Loading from "./components/Loading";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      items: [],
      pageNumber: 0
    };
  }
  getListings = async e => {
    e.preventDefault();
    const searchTerm = e.target.elements.jobKeyword.value;

    // const searchTerm = this.state.searchTerm;
    const pageNumber = this.state.pageNumber;
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${searchTerm}&page=${pageNumber}`
    );

    const data = await api_call.json();
    this.setState({ items: data, isLoading: false });
  };
  goToNextPage = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1, isLoading: true });
    this.getListings();
  };
  componentDidMount() {
    this.getListings();
  }
  render() {
    return (
      <React.Fragment>
        <h1>GitHub Jobs</h1>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div className="wrapper">
            <Search handleSubmit={this.getListings} />
            <Listings items={this.state.items} />
            <div className="foot-wrapper">
              <button onClick={this.goToNextPage} className="nextpage-button">
                Next Page ➜
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
export default App;
