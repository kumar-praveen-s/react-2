import React from "react";

class FormC extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department: "",
      rating: "",
      employee: [],
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(this);
  };

  handleClick = (e) => {
    e.preventDefault();
    const { name, department, rating } = this.state;
    // console.log(name, department, rating);
    const obj = {
      name: name,
      department: department,
      rating: rating,
    };
    const Arr = this.state.employee;
    Arr.push(obj);
    this.setState({
      employee: Arr,
    });
    // console.log(this.state);
    // console.log(this.state.employee.length);
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
                value={this.state.name}
                onChange={this.changeHandler}
                required
              />
            </p>
            <p className="para-style">
              <label>Department :</label>
              <input
                type="text"
                id="deptId"
                name="department"
                value={this.state.department}
                onChange={this.changeHandler}
                required
              />
            </p>
            <p className="para-style">
              <label>Rating :</label>
              <input
                type="number"
                id="ratingId"
                name="rating"
                value={this.state.rating}
                onChange={this.changeHandler}
                required
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
        {this.state.employee.length > 0 && (
          <Fvalue employee={this.state.employee} />
        )}
      </>
    );
  }
}

const Fvalue = (props) => {
  const dc = props.employee.map((item, pos) => {
    return (
      <div className="form-value-box" key={pos}>
        <h1 className="h1-style">{`Name : ${item.name} | Department : ${item.department} | Rating : ${item.rating}`}</h1>
      </div>
    );
  });
  return <div className="form-value-container">{dc}</div>;
};

export default FormC;
