import React, { useState } from "react";

import './ExpenseForm.css';

//data: NewExpense->ExpenseForm
const ExpenseForm = (data) => {

    // -| States |-
    
    /* \ standard multi-line way /
    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState(0);
    const [inputDate, setInputDate] = useState('');
    */

    // \ object-oriented way (good for forms) /
    const [userInput, setUserInput] = useState(
        {
            title : '',
            amount: '',
            date: ''
        }
    )
    

    //- | Sets |-

    // -- Title --
    //'event' is set by default
    const titleChangeHandler = (event) => {
        //console.log(event)
        //setInputTitle(event.target.value);

        //using '...'(spread) operator so the values already in it aren't lost
        setUserInput((prevState) => {
            
            //setting states with the previous amount, and override the one that changed
            return {
                ...prevState,
                title: event.target.value
            }

        })
    }

    // -- Amount --
    const amountChangeHandler = (event) => {
        //setInputAmount(event.target.value);

        setUserInput((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            }
        })
    }

    // -- Date --
    const dateChangeHandler = (event) => {
        //setInputDate(event.target.value);

        setUserInput((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            }   
        })
    }
    // -| / | -

    const submitHandler = (event) => {
        event.preventDefault(); //default is to reload page on form submission

        console.log(userInput);


        //setting 'Expense' data through 'NewExpense' method
        data.onSaveExpenseData(userInput);

        //erasing data after submission + 'value={userInput.x}' => two-way binding 
        setUserInput(() => {
            return {
                title: '',
                amount: '',
                date: ''
            }
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>
                        Title
                    </label>
                    <input type="text" value={userInput.title} onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>
                        Amount
                    </label>
                    <input type="number" value={userInput.amount} min="0.01" onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>
                        Date
                    </label>
                    <input type="date" value={userInput.date} min="2000-01-01" max="2030-12-31" onChange={dateChangeHandler}/>
                </div>

            </div>

            <div className="new-expense__actions">
                <button type="submit">
                    Add Expense
                </button>
            </div>
        </form>
    );
}

export default ExpenseForm;