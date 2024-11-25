"use client";

import Layout from "@/components/layout";
import React, { useState } from "react";

const Sales: React.FC = () => {
    const [estimates] = useState([
        {
            estimateNumber: "EST-0001",
            client: "Global Technologies",
            estimateDate: "11 Mar 2019",
            expiryDate: "17 Mar 2019",
            amount: "$2099",
            status: "Accepted",
        },
        {
            estimateNumber: "EST-0002",
            client: "Delta Infotech",
            estimateDate: "11 Mar 2019",
            expiryDate: "17 Mar 2019",
            amount: "$2099",
            status: "Declined",
        },
        {
            estimateNumber: "EST-0003",
            client: "Cream Inc",
            estimateDate: "11 Mar 2019",
            expiryDate: "17 Mar 2019",
            amount: "$2099",
            status: "Sent",
        },
        {
            estimateNumber: "EST-0004",
            client: "International Software Inc",
            estimateDate: "11 Mar 2019",
            expiryDate: "17 Mar 2019",
            amount: "$2099",
            status: "Expired",
        },
    ]);

    return (
        <Layout>
            <div className="p-6 min-h-screen bg-gray-100 text-black">
                {/* Header */}
                <div className="mb-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold">Estimates</h1>
                        <p className="text-gray-500">Dashboard / Estimates</p>
                    </div>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded">
                        + Create Estimate
                    </button>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 shadow-md rounded mb-4">
                    <div className="grid grid-cols-4 gap-4">
                        <input
                            type="date"
                            className="border px-4 py-2 rounded text-gray-600"
                            placeholder="From"
                        />
                        <input
                            type="date"
                            className="border px-4 py-2 rounded text-gray-600"
                            placeholder="To"
                        />
                        <select className="border px-4 py-2 rounded text-gray-600">
                            <option value="" disabled selected>
                                Select Status
                            </option>
                            <option value="Accepted">Accepted</option>
                            <option value="Declined">Declined</option>
                            <option value="Sent">Sent</option>
                            <option value="Expired">Expired</option>
                        </select>
                        <button className="bg-green-500 text-white px-4 py-2 rounded">
                            SEARCH
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white shadow-md rounded">
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 text-left">Estimate Number</th>
                                <th className="px-4 py-2 text-left">Client</th>
                                <th className="px-4 py-2 text-left">Estimate Date</th>
                                <th className="px-4 py-2 text-left">Expiry Date</th>
                                <th className="px-4 py-2 text-left">Amount</th>
                                <th className="px-4 py-2 text-left">Status</th>
                                <th className="px-4 py-2 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estimates.map((estimate, index) => (
                                <tr
                                    key={index}
                                    className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        }`}
                                >
                                    <td className="px-4 py-2">{estimate.estimateNumber}</td>
                                    <td className="px-4 py-2">{estimate.client}</td>
                                    <td className="px-4 py-2">{estimate.estimateDate}</td>
                                    <td className="px-4 py-2">{estimate.expiryDate}</td>
                                    <td className="px-4 py-2">{estimate.amount}</td>
                                    <td className="px-4 py-2">
                                        <span
                                            className={`px-2 py-1 rounded text-white ${estimate.status === "Accepted"
                                                ? "bg-green-500"
                                                : estimate.status === "Declined"
                                                    ? "bg-red-500"
                                                    : estimate.status === "Sent"
                                                        ? "bg-blue-500"
                                                        : "bg-yellow-500"
                                                }`}
                                        >
                                            {estimate.status}
                                        </span>
                                    </td>
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

export default Sales;