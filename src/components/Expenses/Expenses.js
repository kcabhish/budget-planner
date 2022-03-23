import {expenses} from '../../mockedData/expenses';
import Cards from '../Ui/Cards';
import ExpensesFilter from '../UserInputs/ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.scss';


export const Expenses = (props) => {
    /**
     * Callback function for the ExpensesFilter
     * @param {*} e 
     */
    const expensesFilterOnChangeEvent = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className='expenses'>
            <ExpensesFilter onYearChange={expensesFilterOnChangeEvent} />
        {expenses.map( (expenseItem) => {
            return (
                <Cards key={expenseItem.id}>
                    <ExpenseItem 
                    key={expenseItem.id}
                    date={expenseItem.date}
                    amount={expenseItem.amount}
                    title={expenseItem.title}></ExpenseItem>
                </Cards>
            );
        })}
        </div>
    )
}