const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  userId: { type: String, required: true }  // Clerk user ID
}, { timestamps: true });

module.exports = mongoose.model("Expense", expenseSchema);
