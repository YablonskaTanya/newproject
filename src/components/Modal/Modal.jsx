import React, { Component } from "react";

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handlePressESC);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlePressESC);
  }

  handlePressESC = (e) => {
    console.log("e :>> ", e);
    if (e.code === "Escape") this.props.closeModal();
  };
  render() {
    return (
      <div
        className="modal fade show"
        style={{ display: "block", backdropFilter: "blur(5px)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Modal</h5>
              <button
                onClick={this.props.closeModal}
                type="button"
                className="btn-close"
                aria-label="Close"
                //   onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
