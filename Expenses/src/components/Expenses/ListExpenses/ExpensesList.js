import ExpenseItem from '../ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    //creating default element for when no expenses are found
    let expensesContent = <h2 className='expenses-list__fallback'>Nothing good on this year, chief.</h2>;

    //checking if any expenses exist on selected year
    if (props.items.length === 0) {
        return expensesContent;
    }

    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => {
                return <ExpenseItem
                    key={expense.id}
                    expense={expense}
                />
            })}
        </ul>
    );
}

export default ExpensesList;