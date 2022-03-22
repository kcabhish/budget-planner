import './ExpenseItem.scss';
import {expenses} from '/mockedData/expenses';
function ExpenseItem () {
    console.log(expenses);
    return (
        <div className='expense-item'>
            <div>Date</div>
            <div className='expense-item__description'>
                <h2>Title</h2>
                <div className='expense-item__price'>Amount</div>
            </div>
        </div>
    )
}

export default ExpenseItem;