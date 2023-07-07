import React from 'react';

import './ExpensesFilter.css';

//props: ExpenseRender <-> ExpensesFilter
const ExpensesFilter = (props) => {

    //triggering ExpenseRender's logic for filter interaction
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>

                {/* adding default value + interaction event to dropdown menu */}
                <select value={props.chosenYear} onChange={dropdownChangeHandler}>
                    <option value='1960'>1960</option>
                    <option value='2000'>2000</option>
                    <option value='2001'>2001</option>
                    <option value='2002'>2002</option>
                    <option value='2003'>2003</option>
                    <option value='2004'>2004</option>
                    <option value='2005'>2005</option>
                    <option value='2006'>2006</option>
                    <option value='2007'>2007</option>
                    <option value='2008'>2008</option>
                    <option value='2009'>2009</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;