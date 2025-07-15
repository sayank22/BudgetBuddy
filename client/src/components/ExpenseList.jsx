import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDelete, onEdit }) => {
  return (
    <div className="space-y-4">
      {expenses.map(( expense) => (
        <ExpenseItem
        key={expense._id}
        expense={expense}
        onDelete={onDelete}
        onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
