"use client";

import Layout from "@/components/layout";
import React, { useState } from "react";

const PayrollItems: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Additions");
  const data = [
    { name: "Leave balance amount", category: "Monthly remuneration", amount: "$5" },
    { name: "Arrears of salary", category: "Additional remuneration", amount: "$8" },
    { name: "Gratuity", category: "Monthly remuneration", amount: "$20" },
  ];

  return (
    <Layout>
      <div className="p-6 min-h-screen bg-gray-100 text-black">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Payroll Items</h1>
          <p className="text-gray-500">Dashboard / Payroll Items</p>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex border-b">
          {["Additions", "Overtime", "Deductions"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 ${
                activeTab === tab ? "border-b-2 border-orange-500 text-orange-500" : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Add Button */}
        <div className="flex justify-end mb-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            + Add {activeTab.slice(0, -1)}
          </button>
        </div>

        {/* Table */}
        <div className="bg-white shadow-md rounded">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Default/Unit Amount</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">{item.amount}</td>
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

export default PayrollItems;
