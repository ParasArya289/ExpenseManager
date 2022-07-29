import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredyear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredyear(selectedYear);
    // console.log('expense.js');
    // console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() ===filteredYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        
      </Card>
    </div>
  );
};
export default Expenses;
