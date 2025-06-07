const express = require("express");
const router = express.Router();
const Expense = require('../models/Expense');
const verifyClerkToken = require('../middleware/authMiddleware');

router.use(verifyClerkToken);

// Create new expense (userId available via req.userId)
router.post('/', async (req, res) => {
  try {
    const { title, amount, date } = req.body;
    if (!title || !amount || !date) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const expense = new Expense({
      title,
      amount,
      date: new Date(date),
      userId: req.userId, // userId from verified token
    });

    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    console.error('Error creating expense:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get all expenses for this user
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.userId }).sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
