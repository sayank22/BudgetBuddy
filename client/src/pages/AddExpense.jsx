import AddExpenseForm from "../components/AddExpenseForm";
import React, { useState } from "react";
import api from "../api/axios";
import { useAuth } from "@clerk/clerk-react";

const AddExpense = () => {
  const { getToken } = useAuth();
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = await getToken(); // ✅ Get Clerk token

    await api.post("/api/expenses", form, {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ Send token to backend
      },
    });

    alert("Expense added!");
    setForm({ title: "", amount: "", date: "" }); // reset form
  } catch (err) {
    console.error("Error adding expense:", err);
    alert("Error adding expense");
  }
};

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Expense</h1>
      <AddExpenseForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddExpense;
