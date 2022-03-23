import './App.css';
import { Expenses } from './components/Expenses/Expenses';
import NewExpense from './components/UserInputs/NewExpense';


function App() {

  return (
    <div className="App">
      <NewExpense/>
      <Expenses />
    </div>
  );
}

export default App;
