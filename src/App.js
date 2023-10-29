import Expenses from "./components/Expenses";
import "./App.css";

function App() {
  const expenses = [
    { title: "Buy Sandwich", amount: 199, date: new Date(2023, 10, 23) },
    { title: "Car Insurace", amount: 980, date: new Date(2023, 10, 21) },
    { title: "Snapp", amount: 20, date: new Date(2023, 10, 12) },
    { title: "Buy Internet", amount: 15, date: new Date(2023, 10, 15) },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
