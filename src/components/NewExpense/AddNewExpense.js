import "./AddNewExpense.css";

function AddNewExpense(props) {
  return (
    <form>
      <div className="add-new-expense__actions">
        <button onClick={props.changeForm}>Add New Expense</button>
      </div>
    </form>
  );
}

export default AddNewExpense;
