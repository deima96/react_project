import React, { useState } from "react";

import "./style/ExpenseFilter.css";

export default function ExpenseFilter(props) {
  const [year, setYear] = useState("");

  const onSelectHandler = (e) => {
    setYear(e.target.value);
    props.onFilter(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
