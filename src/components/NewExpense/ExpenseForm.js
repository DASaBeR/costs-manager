import React, {useState} from "react";

import "./ExpenseForm.css";


const ExpenseForm = (props) => {
    /* const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState(""); */

    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    });

    /* const titleChangeHandler = (event) => {
        setUserInput((prevStates) => {
            return {
                enteredTitle: event.target.value,
            enteredAmount: prevStates.enteredAmount,
            enteredDate: prevStates.enteredDate,
            }
        });
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,

        });
    };
    const amountChangeHandler = (event) => {
        setUserInput((prevStates) => {
            return { ...prevStates, enteredAmount: event.target.value }
        });
    };
    const dateChangeHandler = (event) => {
        setUserInput((prevStates) => {
            return { ...prevStates, enteredDate: event.target.value }
        });
    }; */

    const inputChangeHandler = (identifier, value) => {
        if (identifier === "title") {
            setUserInput((prevStates) => {
                return {
                    enteredTitle: value,
                enteredAmount: prevStates.enteredAmount,
                enteredDate: prevStates.enteredDate,
                }
            });
        } 
        else if (identifier === "amount") {
            setUserInput((prevStates) => {
                return { ...prevStates, enteredAmount: value }
            });
        } 
        else {
            setUserInput((prevStates) => {
                return { ...prevStates, enteredDate: value }
            });
        }
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const newExpenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };
        props.onCreateExpense(newExpenseData);
        setUserInput({
            enteredAmount: "",
            enteredTitle: "",
            enteredDate: ""
        })
    };

    return <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input name="title" type="text" value={userInput.enteredTitle} onChange={(event) => {inputChangeHandler(event.target.name, event.target.value)}} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input name="amount" type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={(event) => {inputChangeHandler(event.target.name, event.target.value)}} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input name="date" type="date" value={userInput.enteredDate} min="2024-01-01" max="2025-12-31" onChange={(event) => {inputChangeHandler(event.target.name, event.target.value)}} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
        </div>
    </form>
};


export default ExpenseForm;