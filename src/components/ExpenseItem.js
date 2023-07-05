import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    console.log('props:', props)

    //can only return one root element at a time
    return (
        <div className="expense-item">
            <ExpenseDate date={props.expense.date} />

            <div className='expense-item__description'>
                <h2>
                    {props.expense.title}
                </h2>
                <div className='expense-item__price'>
                    {props.expense.amount}
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;