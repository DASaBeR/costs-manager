import { useState } from "react";
import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] =  useState(props.title);

  const clickHandler = async function () {
    setTitle("updated");
    console.log("updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}> Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
