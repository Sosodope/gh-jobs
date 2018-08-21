import React, { Component } from "react";

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
      "https://cors-anywhere.herokuapp.com/http://jobs.github.com/positions.json?description=react&location=ny&page=0"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ items: data });
      });
  }

  render() {
    return (
      <ul className="wrapper">
        {this.state.items
          ? this.state.items.map((item, index) => (
              <li key={index}>{item.company}</li>
            ))
          : ""}
      </ul>
    );
  }
}
export default App;
