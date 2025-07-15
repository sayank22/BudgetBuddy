const Expense = require("../models/Expense");

// GET /api/expenses
exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find({ userId: req.userId });
  res.json(expenses);
};

exports.addExpense = async (req, res) => {
  try {
    const { title, amount, date } = req.body;

    // Validation: ensure required fields are present
    if (!title || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newExpense = new Expense({
      title,
      amount,
      date: new Date(date),
      userId: req.userId, 
    });

    const saved = await newExpense.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Error adding expense:", error);
    res.status(500).json({ message: "Failed to add expense" });
  }
};


// POST /api/expenses
exports.updateExpense = async (req, res) => {
  try {
  const updatedExpense = await Expense.findByIdAndUpdate(req.params.id,
    {
      title: req.body.title,
      amount: req.body.amount,
    },
    { new: true }
  );
  if (!updatedExpense) {
    return res.status(404).json({ message: "Expense not found" });
  }
  res.status(200).json(updatedExpense);
} catch (error) {
  res.status(500).json({ message: "Error updating expense" })
}
};

// Delete /api/expenses
exports.deleteExpense = async (req, res) => {
  try{
  const deleted = await Expense.findByIdAndDelete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: "Expense not found" });
  }
  res.status(200).json({ message: "Expense deleted successfully" });
} catch (error) {
  console.error("Error deleting expense:", error);
  res.status(500).json({ message: "Error deleting successfully" });
}
};
