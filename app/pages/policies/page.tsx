"use client";

import Layout from "@/components/layout";
import React, { useState } from "react";

const Policies: React.FC = () => {
  const [policies] = useState([
    {
      policyName: "Leave Policy",
      department: "All Departments",
      description: "Lorem ipsum dollar",
      created: "19 Feb 2019",
    },
    {
      policyName: "Permission Policy",
      department: "Marketing",
      description: "Lorem ipsum dollar",
      created: "20 Feb 2019",
    },
  ]);

  return (
    <Layout>
        <div className="p-6 min-h-screen bg-gray-100 text-black">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Policies</h1>
          <p className="text-gray-500">Dashboard / Policies</p>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          + Add Policy
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow-md rounded">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Policy Name</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Created</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{policy.policyName}</td>
                <td className="px-4 py-2">{policy.department}</td>
                <td className="px-4 py-2">{policy.description}</td>
                <td className="px-4 py-2">{policy.created}</td>
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

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-500 text-sm">Showing 1 to 2 of 2 entries</p>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 border rounded text-gray-600">
            &lt;
          </button>
          <button className="px-2 py-1 bg-orange-500 text-white rounded">
            1
          </button>
          <button className="px-2 py-1 border rounded text-gray-600">
            &gt;
          </button>
        </div>
      </div>
    </div>
        
    </Layout>
    
  );
};

export default Policies;
