const express = require("express");
const router = express.Router();
const {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");
const verifyClerkToken = require("../middleware/authMiddleware");

router.use(verifyClerkToken);

router.post("/", addExpense);

router.get("/", getExpenses);

router.put("/:id", updateExpense);

router.delete("/:id", deleteExpense);

module.exports = router;
