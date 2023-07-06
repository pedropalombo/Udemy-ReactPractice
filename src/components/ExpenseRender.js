import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseRender.css';

function ExpenseRender(props) {
    return (
        //using 'Card' instead of normal <div> for CSS recycling 
        <Card className="expenses"> 
            <ExpenseItem expense={props.expenses[0]} />
            <ExpenseItem expense={props.expenses[1]} />
            <ExpenseItem expense={props.expenses[2]} />
            <ExpenseItem expense={props.expenses[3]} />
        </Card>        
    );
}

export default ExpenseRender;