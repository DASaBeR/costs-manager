import React, { useState } from "react";
import Card from "../UI/Card.js";
import ExpenseItem from "./ExpenseItem.js";
import ExpenseFilter from "./ExpenseFilter.js";
import ExpensesList from "./ExpensesList.js";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('all');


  const filterYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter(x => filteredYear !== "all" ? x.date.getFullYear().toString() === filteredYear : true);


  return (
    <Card className="expenses">
      <ExpenseFilter selected = {filteredYear} onFilterYear={filterYear} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
