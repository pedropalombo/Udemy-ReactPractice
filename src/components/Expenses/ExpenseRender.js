import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import './ExpenseRender.css';
import ExpensesFilter from './FilterExpense/ExpensesFilter';

const ExpenseRender = (props) => {
    console.log('props brops: ', props.expenses);
    const [filterYear, setFilterYear] = useState('1960');

    //trigger for filter interaction
    const filterChangeHandler = (selectedYear) => {
        //console.log('component -> ExpenseRender.js => ', selectedYear);
        setFilterYear(selectedYear);
    }

    //filter logic to show only Expenses of the desired year
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    })

    return (
        <div>
            {/* using 'Card' instead of normal <div> for CSS recycling*/}
            <Card className="expenses">
                {/* sending default+chosen year to 'ExpensesFilter' component |-> two-way binding */}
                <ExpensesFilter chosenYear={filterYear} onChangeFilter={(year) => { filterChangeHandler(year) }} />

                {/* dynamically showing all expenses sent by App.js */}
                {
                    //adding 'key' parameter since, w/o it, 'map()' will update existing elements, instead of creating a new one
                    filteredExpenses.map((expense) => {
                        return <ExpenseItem
                            key={expense.id}
                            expense={expense} 
                        />
                    })
                }
            </Card>
        </div>
    );
}

export default ExpenseRender;