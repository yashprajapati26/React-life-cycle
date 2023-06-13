import React, { Component } from "react";
import Child from "./Child";

export default class Parant extends Component {
  // life cycle functions

  constructor(props) {
    super(props);
    this.state = {
      status: "Pending",
      show: true,
    };
    console.log("Parant : Constructor call");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Parant : getDerivedStateFromProps method call", props, state);
    return null;
  }

  componentDidMount() {
    console.log("Parant : ComponentDidMount method call");
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log(
      "Parant : getSnapshotBeforeUpdate method call",
      preProps,
      preState
    );
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "Parant :shouldComponentUpdate method call",
      nextProps,
      nextState
    );
    return true;
  }

  componentDidUpdate(preProps, preState, snapShot) {
    console.log(
      "Parant : ComponentDidUpdate method call",
      preProps,
      preState,
      snapShot
    );
  }

  // user defined functions
  getStatus = (status) => {
    this.setState({ status: status });
  };

  render() {
    let child;
    if (this.state.show) {
      child = <Child getStatus={this.getStatus} />;
    }
    return (
      <div>
        <div className="border border-black shadow-lg shadow-black rounded-lg h-fit m-20">
          <p className="-mt-3 bg-white w-fit">Parant</p>
          <h1>Personal Information</h1>

          <p>status : {this.state.status} </p>
          <p
            className="float-right mr-5 text-red-500"
            onClick={() => {
              this.setState({ show: false });
            }}
          >
            X Close
          </p>
          {child}
        </div>
        {console.log("Parant : Render method call")}
      </div>
    );
  }
}
