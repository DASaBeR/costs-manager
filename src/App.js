import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

import "./App.css";

function App() {

  const addNewExpenseHandler = (expenseData) => {
    expenses.push({
      title: expenseData.title,
      amount: 125,
      date: expenseData.date
    });
    console.log(expenseData);
    console.log(expenses);
  };
  const expenses = [
    { title: "Buy Sandwich", amount: 199, date: new Date(2023, 10, 23) },
    { title: "Car Insurace", amount: 980, date: new Date(2023, 10, 21) },
    { title: "Snapp", amount: 20, date: new Date(2023, 10, 12) },
    { title: "Buy Internet", amount: 15, date: new Date(2023, 10, 15) },
  ];

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler}  />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
