import ExpenseItem from './components/ExpenseItem';
import './App.css';
import {expenses} from './mockedData/expenses';

function App() {
  expenses.map(expense => console.log(expense))
  return (
    <div className="App">
      {
        expenses.map( (expenseItem) => {
          return (
            <ExpenseItem 
              key={expenseItem.id}
              date={expenseItem.date}
              amount={expenseItem.amount}
              title={expenseItem.title}></ExpenseItem>
          );
        })
      }
    </div>
  );
}

export default App;
