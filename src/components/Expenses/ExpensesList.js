import ExpenseItem from "./ExpenseItem";
import Cards from "../Ui/Cards";
import "./ExpensesList.scss";

const ExpensesList = props => {
    if (props.expenses.length === 0 ) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
    return <ul className="expenses-list">
        {
            props.expenses.map( (expenseItem) => {
                return (
                    <Cards key={expenseItem.id}>
                        <ExpenseItem 
                        key={expenseItem.id}
                        date={expenseItem.date}
                        amount={expenseItem.amount}
                        title={expenseItem.title}></ExpenseItem>
                    </Cards>
                );
            })
        }
    </ul>
}

export default ExpensesList;