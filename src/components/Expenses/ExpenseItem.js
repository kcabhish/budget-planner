import './ExpenseItem.scss';
import {ExpenseDate} from './ExpenseDate';
import Cards from '../Ui/Cards';
function ExpenseItem (props) {
    return (
        <Cards className='expense-item'>
            <div><ExpenseDate date={props.date}/></div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </Cards>
    )
}

export default ExpenseItem;