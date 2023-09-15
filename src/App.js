import React,{useState}  from 'react';

import NewExpense from './components/Expenses/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';


let Dummy_EXPENSE=[
    {
        id:'e1',
        title:'school fee',
        amount: 250,
        date: new Date(2021,5,12)
    },
    {
        id:'e2',
        title:'Books',
        amount: 230,
        date: new Date(2021,2,22)
    },
    {
        id:'e3',
        title:'House Rent',
        amount: 700,
        date: new Date(2021,4,2)
    },
    {
        id:'e4',
        title:'savings',
        amount: 300,
        date: new Date(2023,15,22)
    }
];

const App = () => {
    
    const [expenses, setExpenses] = useState(Dummy_EXPENSE);
  

    const addExpenseHandler = (expense) => {
        const updatedExpenses = [expense, ...expenses ]
         setExpenses(updatedExpenses)
    }

    return (
            <div>
            <NewExpense onAddExpense={addExpenseHandler}/>

            <Expenses item={expenses}  />
            </div>
    );
}
export default App;