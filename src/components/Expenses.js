import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./style/style.css";
export default function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.title}
        amount={props.amount}
        date={props.date}
      />
    </div>
  );
}
