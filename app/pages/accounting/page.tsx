"use client";

import Layout from "@/components/layout";
import React, { useState } from "react";

const Accounting: React.FC = () => {
  const [expenses] = useState([
    {
      notes: "Test",
      categoryName: "Hardware",
      subCategoryName: "Hardware Expenses",
      amount: 1000.0,
      revenueDate: "06 Jan 2020",
    },
    {
      notes: "Test",
      categoryName: "Project",
      subCategoryName: "Project Expenses",
      amount: 1000.0,
      revenueDate: "06 Jan 2020",
    },
  ]);

  return (
    <Layout>
      <div className="p-6 min-h-screen bg-gray-100 text-black">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Accounting</h1>
            <p className="text-gray-500">Dashboard / Accounts</p>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            + Add Accounting
          </button>
        </div>

        {/* Table */}
        <div className="bg-white shadow-md rounded">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">No</th>
                <th className="px-4 py-2 text-left">Notes</th>
                <th className="px-4 py-2 text-left">Category Name</th>
                <th className="px-4 py-2 text-left">SubCategory Name</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Revenue Date</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr
                  key={index}
                  className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{expense.notes}</td>
                  <td className="px-4 py-2">{expense.categoryName}</td>
                  <td className="px-4 py-2">{expense.subCategoryName}</td>
                  <td className="px-4 py-2">{expense.amount.toFixed(2)}</td>
                  <td className="px-4 py-2">{expense.revenueDate}</td>
                  <td className="px-4 py-2">
                    <button className="px-2 py-1 text-gray-600 hover:text-black">
                      ...
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </Layout>

  );
};

export default Accounting;
