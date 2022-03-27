import {useState} from 'react';
import './App.css';
import { Expenses } from './components/Expenses/Expenses';
import NewExpense from './components/UserInputs/NewExpense';
import {expenses as mockExpenses} from './mockedData/expenses';

function App() {
  const [expenses, updateExpenses] = useState(mockExpenses);
  const addExpenseHadler = (expenseData) => {
    updateExpenses ((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  }
 
  return (
    <div className="App">
      <NewExpense addExpenseHadler={addExpenseHadler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
