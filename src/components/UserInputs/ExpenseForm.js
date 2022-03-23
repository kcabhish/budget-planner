import './ExpenseForm.scss';
import React, { useState } from 'react';

const EVENT_TYPES = {
    'TITLE': 'title',
    'AMOUNT': 'amount',
    'DATE': 'date'
}
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const eventHandler = (event, eventType ) => {
        switch(eventType) {
            case EVENT_TYPES.TITLE: {
                // example of getting previous state
                setEnteredTitle( (prevState) => {
                    console.log(`previous State ${prevState}`);
                    return event.target.value;
                })
                break;
            }
            case EVENT_TYPES.AMOUNT: {
                setEnteredAmount(event.target.value);
                break;
            }
            case EVENT_TYPES.DATE: {
                setEnteredDate(event.target.value);
                break;
            }
        }
    }

    const resetFormValues = () => {
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const submitData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        }
        props.onSaveExpense(submitData);
        resetFormValues();
    }

    return (
    <form onSubmit={onSubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'
                    value={enteredTitle}
                    onChange = {(e) => eventHandler(e, EVENT_TYPES.TITLE)}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange = {(e) => eventHandler(e, EVENT_TYPES.AMOUNT)}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} min="2022-01-01" max='2022-12-31'  onChange = {(e) => eventHandler(e, EVENT_TYPES.DATE)}></input>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>);
}
export default ExpenseForm;