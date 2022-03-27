import ExpenseForm from './ExpenseForm';
import './NewExpense.scss';


const NewExpense = (props) => {
    const newExpenseOnSubmitHandler = (formData) => {
        props.addExpenseHadler(formData);
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpense={newExpenseOnSubmitHandler} />
    </div>
}
export default NewExpense;