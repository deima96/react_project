import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./style/expenses.css";

export default function Expenses(props) {
  const onFilterHandler = (year) => {
    props.year(year);
  };

  return (
    <div className="expenses">
      <ExpenseFilter onFilter={onFilterHandler} />

      {props.items.map((expense) => (
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
