import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="space-y-4">
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses yet.</p>
      ) : (
        expenses.map((exp) => (
          <ExpenseItem key={exp._id} expense={exp} />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
