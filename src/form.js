import React from "react";
import Fvalue from "./fvalue";

class FormC extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department: "",
      rating: "",
      employee: [],
      status: false,
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this);
  };

  handleClick = (e) => {
    e.preventDefault();
    const { name, department, rating } = this.state;
    console.log(name, department, rating);
    const obj = {
      n: name,
      depart: department,
      rate: rating,
    };
    this.state.employee.push(obj);
    console.log(this.state);
    this.setState({
      status: true,
    });
  };

  render() {
    return (
      <>
        <h1 className="heading">Employee Feedback form</h1>
        <div className="form-container">
          <form className="form">
            <p className="para-style">
              <label>Name :</label>
              <input
                type="text"
                id="nameId"
                name="name"
                onChange={this.changeHandler}
              />
            </p>
            <p className="para-style">
              <label>Department :</label>
              <input
                type="text"
                id="deptId"
                name="department"
                onChange={this.changeHandler}
              />
            </p>
            <p className="para-style">
              <label>Rating :</label>
              <input
                type="number"
                id="ratingId"
                name="rating"
                onChange={this.changeHandler}
              />
            </p>
            <p className="para-style">
              <button
                type="submit"
                onClick={this.handleClick}
                className="btn-style"
              >
                submit
              </button>
            </p>
          </form>
        </div>
        {this.state.status && <Fvalue employee={this.state.employee} />}
      </>
    );
  }
}

export default FormC;
