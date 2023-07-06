import React, { useState, useEffect } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    //using 'const' so each Component has their own 'state'
    const [title, setTitle] = useState(props.expense.title);

    const clickHandler = () => {
        setTitle('suriname'); //returns the JSX again, but updated
    }

    //can only return one root element at a time
    return (
        //using 'Card' instead of normal <div> for CSS recycling 
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date} />

            <div className='expense-item__description'>
                <h2>
                    {/*{props.expense.title}*/}
                    {title}
                </h2>
                <div className='expense-item__price'>
                    R${props.expense.amount}
                </div>
                
                {/* function without '()', otherwise it trigger on Component load */}
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;