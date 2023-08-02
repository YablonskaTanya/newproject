import { Component } from "react";

class FormLogin extends Component {
  state = {
    email: "",
    password: "",
    isChecked: false,
  };

  componentDidMount() {
    console.log("mount Modal");
  }

  componentWillUnmount() {
    console.log("Unmount Modal");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("DidUpdate Form");
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    // Проп, який передається формі для виклику під час сабміту
    this.props.createUser({
      email: this.state.email,
      password: this.state.password,
    });
    // аналог попередньому запису але в тому випадку якщо в стейті
    // більще нічого немає окрім email та password
    // this.props.createUser(this.state);

    //закриваємо модалку після відправки форми
    this.props.closeModal();
    // чистимо інпути *(але того можа але робити тому, що
    //  при закритті модалки компонент перерендереться і почиститься)
    this.setState({
      email: "",
      password: "",
    });
  };

  // глибока деструктуризація ({ target: { checked } })  з e.target.checked
  handleChecked = ({ target: { checked } }) => {
    this.setState({
      isChecked: checked,
    });
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={this.handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            className="form-control"
            id="exampleInputPassword1"
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={this.state.isChecked}
            onChange={this.handleChecked}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            to agree
          </label>
        </div>
        <button
          disabled={!this.state.isChecked}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default FormLogin;
