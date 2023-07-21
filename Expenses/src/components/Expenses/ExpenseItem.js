import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    //can only return one root element at a time
    return (
        //using <li> now bc 'ExpenseRender' now returns <ul>
        //PS: not needed, but welcomed
        <li>
            {/*using 'Card' instead of normal <div> for CSS recycling*/}
            <Card className="expense-item">
                <ExpenseDate date={props.expense.date} />

                <div className='expense-item__description'>
                    <h2>
                        {props.expense.title}
                    </h2>
                    <div className='expense-item__price'>
                        R${props.expense.amount}
                    </div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;