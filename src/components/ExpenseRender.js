import ExpenseItem from "./ExpenseItem";
import './ExpenseRender.css';

function ExpenseRender(props) {
    return (
        <div className="expenses"> 
            <ExpenseItem expense={props.expenses[0]} />
            <ExpenseItem expense={props.expenses[1]} />
            <ExpenseItem expense={props.expenses[2]} />
            <ExpenseItem expense={props.expenses[3]} />
        </div>        
    );
}

export default ExpenseRender;