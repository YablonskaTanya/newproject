import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 0,
  };

  handleClickIncrement = () =>
    this.setState((prevState) => ({ value: prevState.value + 1 }));

  handleClickDecrement = () =>
    this.setState((prevState) => ({ value: prevState.value - 1 }));

  render() {
    const { value } = this.state;
    return (
      // <div className="position-absolute top-200 start-50 translate-middle">
      <div className="card bg-dark text-white " style={{ width: "470px" }}>
        <div className="card-body">
          <h5 className="card-title text-center fs-1">Counter</h5>
          <p className="card-text  text-center" style={{ fontSize: "80px" }}>
            {value}
          </p>
          <div className="d-flex justify-content-center px-5">
            <button
              className="btn btn-outline-success me-5"
              onClick={this.handleClickIncrement}
            >
              <svg
                id="i-plus"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32"
                height="32"
                fill="none"
                stroke="currentcolor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M16 2 L16 30 M2 16 L30 16" />
              </svg>
            </button>
            <button
              className="btn  btn-outline-danger ms-5"
              onClick={this.handleClickDecrement}
            >
              <svg
                id="i-minus"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32"
                height="32"
                fill="none"
                stroke="currentcolor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M2 16 L30 16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Counter;
