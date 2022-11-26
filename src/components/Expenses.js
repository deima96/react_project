import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./style/expenses.css";

export default function Expenses(props) {
  const [year, setYear] = useState("2020");
  const onFilterHandler = (year) => {
    setYear(year);
  };
  const filterYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });
  return (
    <div className="expenses">
      <ExpenseFilter onFilter={onFilterHandler} />

      {filterYear.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}
