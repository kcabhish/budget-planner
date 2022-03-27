
import { useState } from 'react';
import ExpensesFilter from '../UserInputs/ExpensesFilter';
import './Expenses.scss';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart'


export const Expenses = (props) => {
    const [expenses, updateExpenses] = useState(props.expenses);
    /**
     * Callback function for the ExpensesFilter
     * @param {*} e 
     */
    const expensesFilterOnChangeEvent = (e) => {
        updateExpenses(() => {
            return props.expenses.filter(item => {
                return item.date.toString().includes(e.target.value);
            });
        })
    }



    return (
        <div className='expenses'>
            <ExpensesFilter onYearChange={expensesFilterOnChangeEvent} />
            <ExpenseChart expenses={expenses} />
            <ExpensesList expenses={expenses}/>
        </div>
    )
}