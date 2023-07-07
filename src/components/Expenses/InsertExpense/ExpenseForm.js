import React, { useState } from "react";

import './ExpenseForm.css';

//data: NewExpense->ExpenseForm
const ExpenseForm = (data) => {

    // -| States |-

    // \ object-oriented way (good for forms) /
    const [userInput, setUserInput] = useState(
        {
            title : '',
            amount: '',
            date: ''
        }
    )
    

    //- | Sets |-

    // -- Generic --
    const inputChangeHandler = (type, value) => {
        switch(type) {
            case 'title':
                setUserInput((prevState) => {
                    return {
                        ...prevState,
                        title: value
                    }
        
                });
                break;
            
            case 'date':
                setUserInput((prevState) => {
                    return {
                        ...prevState,
                        date: value
                    }   
                });
                break;

            case 'amount':
                setUserInput((prevState) => {
                    return {
                        ...prevState,
                        amount: value
                    }
                });
                break;

            default:
                console.log('Input not valid.');
                break;
        }
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
                    {/* passing values to methods w/o insta-triggering them ==> arrow function */}
                    <input type="text" value={userInput.title} onChange={(event) => inputChangeHandler('title', event.target.value)}/>
                </div>

                <div className="new-expense__control">
                    <label>
                        Amount
                    </label>
                    <input type="number" value={userInput.amount} min="0.01" onChange={(event) => inputChangeHandler('amount', event.target.value)}/>
                </div>

                <div className="new-expense__control">
                    <label>
                        Date
                    </label>
                    <input type="date" value={userInput.date} min="2000-01-01" max="2030-12-31" onChange={(event) => inputChangeHandler('date', event.target.value)}/>
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