import React,{useEffect, useState}  from 'react';

import NewExpense from './components/Expenses/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';


let Dummy_EXPENSE=[];

const App = () => {
    
    const [expenses, setExpenses] = useState(Dummy_EXPENSE);

    function fetchData(){
        fetch('http://localhost:3500/Dummy_EXPENSE')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming you expect JSON data
    })
    .then(data => {
       /* console.log(data); */
        setExpenses(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

    }

     useEffect(() =>{
        fetchData();
     },[])

    
  

    const addExpenseHandler = (expense) => {
        fetch('http://localhost:3500/Dummy_EXPENSE',{
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
                'content-Type':'application/json'
            }
        }).then(
            response => {
                fetchData();

            }
        )
    };

    return (
            <div>
            <NewExpense onAddExpense={addExpenseHandler}/>

            <Expenses item={expenses}  />
            </div>
    );
}
export default App;