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
      // "https://jobs.github.com/positions.json?description=javascript&location=remote&full_time=false"
      "https://jsonplaceholder.typicode.com/photos"
    )
      .then(response => response.json())
      .then(items => this.setState({ isLoaded: true, items }));
  }

  render() {
    const { items } = this.state;
    // const { id, name, email } = this.state.items;
    return (
      <ul className="wrapper">
        {items.map(item => (
          <li key={item.id}>
            {item.title}
            <img src={item.url} />
          </li>
        ))}
      </ul>
    );
  }
}
export default App;
