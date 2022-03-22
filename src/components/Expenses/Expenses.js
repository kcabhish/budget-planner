import {expenses} from '../..//mockedData/expenses';
import ExpenseItem from './ExpenseItem';
import './Expenses.scss';
export const Expenses = (props) => {
    return (
        expenses.map( (expenseItem) => {
            return (
                <div className='expenses'>
                    <ExpenseItem 
                    key={expenseItem.id}
                    date={expenseItem.date}
                    amount={expenseItem.amount}
                    title={expenseItem.title}></ExpenseItem>
                </div>
            );
        })
    )
}