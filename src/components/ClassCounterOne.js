import React, { Component } from "react";

export class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
    // console.log("THIS IS DID MOUNT");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating document title");
      document.title = `Clicked ${this.state.count} times`;
    }
    //console.log("THIS IS DID UPDATE");
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        ></input>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {" "}
          click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
