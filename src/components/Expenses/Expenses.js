import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [chosenYear, setChosenYear] = useState('2021');

    const changeYearHandler = (enteredYear) => {
        setChosenYear(enteredYear);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === chosenYear;
    });

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter onYearChange={changeYearHandler} initialYear={chosenYear} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
