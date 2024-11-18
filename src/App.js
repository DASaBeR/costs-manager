import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

import "./App.css";

const DummyData = [
  { id:"2e480864-f424-403d-8f91-032a9fca45e1", title: "Buy Sandwich", amount: 199, date: new Date(2024, 5, 23) },
  { id:"7b0180bb-2c1b-4299-8e08-3128e10ee920", title: "Car Insurace", amount: 105, date: new Date(2023, 11, 21) },
  { id:"187309f9-8ade-4f8a-92be-6adb64031de4", title: "Snapp", amount: 60, date: new Date(2025, 3, 12) },
  { id:"781dbbe5-3260-4ce5-a1ce-643b21fa9725", title: "Buy Internet", amount: 30, date: new Date(2022, 1, 15) },
];


function App() {

  const [expenses, setExpenses] = useState(DummyData);

  const addNewExpenseHandler = (expenseData) => {

    setExpenses(prevExpense => {
      return [expenseData, ...prevExpense]
    });

  };
  

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler}  />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
