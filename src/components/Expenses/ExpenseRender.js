import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import './ExpenseRender.css';
import ExpensesFilter from './FilterExpense/ExpensesFilter';

const ExpenseRender = (props) => {
    const [filterYear, setFilterYear] = useState('1960');

    //trigger for filter interaction
    const filterChangeHandler = (selectedYear) => {
        //console.log('component -> ExpenseRender.js => ', selectedYear);
        setFilterYear(selectedYear);
    }
    
    return (
        <div>
            {/* using 'Card' instead of normal <div> for CSS recycling*/}
            <Card className="expenses">
                {/* sending default+chosen year to 'ExpensesFilter' component |-> two-way binding */}
                <ExpensesFilter chosenYear={filterYear} onChangeFilter={(year) => {filterChangeHandler(year)}}/>

                <ExpenseItem expense={props.expenses[0]} />
                <ExpenseItem expense={props.expenses[1]} />
                <ExpenseItem expense={props.expenses[2]} />
                <ExpenseItem expense={props.expenses[3]} />
            </Card>  
        </div>      
    );
}

export default ExpenseRender;