const Expense = require("../models/Expense");

// GET /api/expenses
exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find({ userId: req.query.userId });
  res.json(expenses);
};

// POST /api/expenses
exports.addExpense = async (req, res) => {
  const newExpense = new Expense(req.body);
  const saved = await newExpense.save();
  res.status(201).json(saved);
};
