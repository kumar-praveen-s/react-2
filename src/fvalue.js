import React from "react";

const Fvalue = (props) => {
  const dc = props.employee.map((item, pos) => {
    return (
      <div className="form-value-box" key={pos}>
        <h1 className="h1-style">{`Name : ${item.n} | Department : ${item.depart} | Rating : ${item.rate}`}</h1>
      </div>
    );
  });
  return <div className="form-value-container">{dc}</div>;
};

export default Fvalue;
