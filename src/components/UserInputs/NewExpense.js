import ExpenseForm from './ExpenseForm';
import './NewExpense.scss';


const NewExpense = (props) => {
    const newExpenseOnSubmitHandler = (formData) => {
        console.log(formData);
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpense={newExpenseOnSubmitHandler} />
    </div>
}
export default NewExpense;