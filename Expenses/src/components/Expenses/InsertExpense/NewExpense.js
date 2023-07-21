import React from "react";

import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

//data: App.js->NewExpense
const NewExpense = (data) => {

    //sending data Child->Parent
    // \-> OBS: 'props' is only Parent->Child
    const saveExpenseData = (inputExpenseData) => {
        
        //setting new 'Expense' data
        //'...'(spread) operator used to bring an exact copy of the data inside 'inputExpenseData' obj
        const expenseData = {
            ...inputExpenseData,
            id: Math.random().toString()
        }

        //console.log('new expense data: ', expenseData)
        data.onAddExpense(expenseData); //using method from 'App.js' to log
    }

    return (
        <div className="new-expense">
            {/* getting data submitted on 'NewExpense' forms */}
            <ExpenseForm onSaveExpenseData={saveExpenseData}/>
        </div>
    );
}

export default NewExpense;