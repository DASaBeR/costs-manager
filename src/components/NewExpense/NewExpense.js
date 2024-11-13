import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {

    const craeteExpenseHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        };

        props.onAddNewExpense(expenseData);
        
    };

    return <div className="new-expense">
        <ExpenseForm onCreateExpense={craeteExpenseHandler}/>
    </div>
};

export default NewExpense;


