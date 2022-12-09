import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";
import { useState } from "react";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  const addNewExpenseHandler = () => {
    changeForm(
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        revertForm={formCancelHandler}
      />
    );
  };

  const formCancelHandler = () => {
    changeForm(<AddNewExpense changeForm={addNewExpenseHandler} />);
  };

  const [currentForm, changeForm] = useState(
    <AddNewExpense changeForm={addNewExpenseHandler} />
  );

  return <div className="new-expense">{currentForm}</div>;
}

export default NewExpense;
