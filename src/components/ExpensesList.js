import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
    return (
        <div className="expenses">
            {props.expenses.map((el) => (
                <ExpenseItem
                    key={el.id}
                    title={el.title}
                    amount={el.amount}
                    date={el.date}
                />
            ))}
        </div>
    );
}

export default ExpensesList;
