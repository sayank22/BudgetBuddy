import React from "react";

const SummaryCard = ({ expenses }) => {
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <div className="bg-blue-100 p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold">Total Spent</h2>
      <p className="text-xl font-bold text-blue-800">₹{total}</p>
    </div>
  );
};

export default SummaryCard;
