import React, { useState } from "react";
import "../style/ExpenseForm.css";

export default function ExpenseForm(props) {
  //1st approach of using State
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState("");
  const [showComponent, setShowComponent] = useState(false);

  //2nd approach of using state(all value needs to be change here at once all together)
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    //1st
    setEnteredTitle(event.target.value);
    //2nd
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    //3rd //updating state that depends on the previous state
    // setUserInput((prevSate) => {
    //     return {...prevSate, enteredTitle: event.target.value}
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.expenseList(expenseData);
    setEnteredTitle("");
    setEnteredAmount(0);
    setEnteredDate("");
  };
  const onClickHandler = () => {
    setShowComponent(!showComponent);
  };
  if (!showComponent) {
    return (
      <div>
        <button onClick={onClickHandler}>Add New Expense</button>
      </div>
    );
  } else {
    return (
      <form onSubmit={submitHandler} onClick={onClickHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-expense__actions">
            <button>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    );
  }
}
