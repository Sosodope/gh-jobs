import React, { Component } from "react";
import logo from "./logo.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(
      "https://jobs.github.com/positions.json?description=javascript&location=remote",
      { mode: "no-cors" }
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({ isLoaded: true, items: result.items });
        }, // Handle errors here
        error => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.title} {item.location}
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default App;
