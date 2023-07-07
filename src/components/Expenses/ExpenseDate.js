import './ExpenseDate.css';

const ExpenseDate = (props) => {
    //changing 'Date' retrieval logic bc of a bug appeared after insertion logic was applied
    const date = new Date(props.date);

    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();

    //console.log(`Datas:\ndia:${typeof day}\nmes:${month}\nano:${year}`);

    return (
        <div className='expense-date'>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    );

}

export default ExpenseDate;