import React, { useEffect, useState } from "react";
import SummaryCard from "../components/SummaryCard";
import ExpenseList from "../components/ExpenseList";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import { toast } from 'sonner';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editModalOpen, setEditModalOpen] =useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", amount: "" });
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const token = await getToken();
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/expenses`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setExpenses(res.data);
      } catch (err) {
        console.error("Failed to fetch expenses", err);
        setError("Failed to load expenses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, [getToken]);


  const handleDelete = async (id) => {
    try {
      const token = await getToken();
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/expenses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.info("Expense deleted.");
      setExpenses((prev) => prev.filter((e) => e._id !== id));
    } catch (err) {
      console.error("Delete error", err);
    }
  };

  const handleEdit = (expense) => {
    setSelectedExpense(expense);
    setEditForm({ title: expense.title, amount: expense.amount });
    setEditModalOpen(true);
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const token = await getToken();
      const res = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/expenses/${selectedExpense._id}`,
        editForm,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Expense updated.");

      setExpenses((prev) =>
        prev.map((e) => (e._id === res.data._id ? res.data : e))
      );
      setEditModalOpen(false);
    } catch (err) {
      console.error("Update error", err);
      toast.error("Not updated.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Expenses</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <SummaryCard expenses={expenses} />
          <ExpenseList expenses={expenses}
          onDelete={handleDelete}
          onEdit={handleEdit} />
        </>
      )}
      {editModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h2 className="text-lg font-bold mb-4"></h2>
            <input 
            name="title"
            value={editForm.title}
            onChange={handleEditChange}
            className="w-full p-2 mb-3 border rounded"
            placeholder="Title" />
            <input
              name="amount"
              type="number"
              value={editForm.amount}
              onChange={handleEditChange}
              className="w-full p-2 mb-3 border rounded"
              placeholder="Amount"
            />
            <div className="flex justify-end space-x-2">
              <button onClick={() => setEditModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded">
                Cancel
              </button>
              <button onClick={handleUpdate} className="px-4 py-2 bg-blue-600 text-white rounded">
                Save
              </button>
            </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default Dashboard;
