import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesList.css";

const ExpensesList = (props) => {
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
                {filteredExpenses.map((el) => (
                    <ExpenseItem
                        key={el.id}
                        title={el.title}
                        amount={el.amount}
                        date={el.date}
                    />
                ))}
            </Card>
        </div>
    );
}

export default ExpensesList;
