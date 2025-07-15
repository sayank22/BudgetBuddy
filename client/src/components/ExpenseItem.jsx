const ExpenseItem = ({ expense, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow p-4 rounded-md flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{expense.title}</h3>
        <p className="text-sm text-gray-600">{expense.category} {new Date(expense.date).toLocaleDateString()}</p>
      </div>
      <div className={`text-lg font-bold ${expense.type === "income" ? "text-green-600" : "text-blue-500"}`}>
        ₹{expense.amount}
      </div>
       <button
        className="text-red-600 font-semibold"
        onClick={() => onDelete(expense._id)}
      >
        Delete
      </button>
      <button
        className="text-indigo-600 font-semibold"
        onClick={() => onEdit(expense)}
      >
        Edit
      </button>
    </div>
  );
};

export default ExpenseItem;
