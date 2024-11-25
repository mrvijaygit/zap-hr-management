"use client";

import Layout from "@/components/layout";
import React from "react";
import { useState } from "react";

const PaymentsReport: React.FC = () => {
    const [payments] = useState([
        {
            transactionId: "834521",
            date: "2nd Dec 2020",
            clientName: "Dreams",
            paymentMethod: "Online",
            invoice: "INV0001",
            amount: "$4,329,970.7",
        },
        {
            transactionId: "834521",
            date: "2nd Dec 2020",
            clientName: "Dreams",
            paymentMethod: "Online",
            invoice: "INV0001",
            amount: "$4,329,970.7",
        },
    ]);

    return (
        <Layout>

            <div className="p-6 min-h-screen bg-gray-100 text-black">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Payments Report</h1>
                    <p className="text-gray-500">Dashboard / Payments Report</p>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-4 mb-6">
                    <input
                        type="date"
                        placeholder="From"
                        className="border p-2 rounded w-full sm:w-48"
                    />
                    <input
                        type="date"
                        placeholder="To"
                        className="border p-2 rounded w-full sm:w-48"
                    />
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                        SEARCH
                    </button>
                </div>

                {/* Table */}
                <div className="bg-white shadow-md rounded">
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 text-left">#</th>
                                <th className="px-4 py-2 text-left">Transaction ID</th>
                                <th className="px-4 py-2 text-left">Date</th>
                                <th className="px-4 py-2 text-left">Client Name</th>
                                <th className="px-4 py-2 text-left">Payment Method</th>
                                <th className="px-4 py-2 text-left">Invoice</th>
                                <th className="px-4 py-2 text-left">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => (
                                <tr
                                    key={index}
                                    className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        }`}
                                >
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{payment.transactionId}</td>
                                    <td className="px-4 py-2">{payment.date}</td>
                                    <td className="px-4 py-2">{payment.clientName}</td>
                                    <td className="px-4 py-2">{payment.paymentMethod}</td>
                                    <td className="px-4 py-2">{payment.invoice}</td>
                                    <td className="px-4 py-2">{payment.amount}</td>
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

export default PaymentsReport;
