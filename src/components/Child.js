import React, { Component } from "react";

export default class Child extends Component {

 // life cycle functions
  constructor(props) {
    super(props);
    this.state = {
      status: "Pending",
    };
    console.log("Child : Constructor call");

  }

  static getDerivedStateFromProps(props, state) {
    console.log("Child : getDerivedStateFromProps method call", props, state);
    return null;
  }

  componentDidMount() {
    console.log("Child : ComponentDidMount method call");
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log(
      "Child : getSnapshotBeforeUpdate method call",
      preProps,
      preState
    );
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "Child :shouldComponentUpdate method call",
      nextProps,
      nextState
    );
    return true;
  }

  componentDidUpdate(preProps, preState, snapShot) {
    console.log(
      "Child : ComponentDidUpdate method call",
      preProps,
      preState,
      snapShot
    );
  }

  componentWillUnmount() {
      console.log("Child : ComponentWillUnmount method call");
      alert("Bye from child component");
  }

  // user defined functions
  statusHandler = (event) => {
    console.log("update : ", event.target.value);
    this.setState({ status: event.target.value });
    this.showStatus(event.target.value);
  };

  showStatus = (val) => {
    this.props.getStatus(val);
  };

  render() {
    console.log("Child : Render method call")

    return (
      <div className="bg-gray-200 p-5 m-5 rounded-lg border border-gray-400 ">
        <p className="-mt-8 bg-white w-fit -ml-5">Child</p>
        <p>First Name : Yash </p>
        <p>Last Name : Prajapati </p>
        <p>Designation : Software Engineer </p>
        <p>Degree : Master </p>
        <p>
          Skill : Angular, React, Node, Python, Django, DRF, Express, MongoDB,
          Postgres, Mysql
        </p>
        status :
        <select
          className="border border-black p-1"
          onChange={this.statusHandler}
        >
          <option value="Pending">Pending</option>
          <option value="Approve">Approve</option>
          <option value="Reject">Reject</option>
        </select>
      </div>
    );
  }
}
