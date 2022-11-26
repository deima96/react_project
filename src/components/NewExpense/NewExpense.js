import React from "react";
import "../style/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const onSaveExpenseHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: (Math.random() * 100).toString(),
    };
    props.addExpense(expenseData);
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm expenseList={onSaveExpenseHandler} />
    </div>
  );
}
