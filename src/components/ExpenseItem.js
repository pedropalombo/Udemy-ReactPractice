import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {
    console.log('props:', props)

    //can only return one root element at a time
    return (
        //using 'Card' instead of normal <div> for CSS recycling 
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
    );
}

export default ExpenseItem;