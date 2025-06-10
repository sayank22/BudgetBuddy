import React, { useEffect, useState } from "react";
import SummaryCard from "../components/SummaryCard";
import ExpenseList from "../components/ExpenseList";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
          <ExpenseList expenses={expenses} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
