"use client";

// components/Sidebar.js
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, 
    FaUser, FaFileAlt, FaCalendarAlt, FaDollarSign, FaChevronDown, FaChevronUp, 
    FaSalesforce,
    FaPaypal,
    FaFileArchive} from 'react-icons/fa';
import { FaChartColumn } from 'react-icons/fa6';

export default function Sidebar() {
  const [isIncomeOpen, setIsIncomeOpen] = useState(false);

  const toggleIncome = () => setIsIncomeOpen(!isIncomeOpen);

  return (
    <div className="flex flex-col w-64 h-screen bg-gray-100 p-4">
      {/* Logo */}
      {/* <img src="/logo.jpeg" alt="Logo" className="w-32 mb-4" />
      <div className="flex items-center justify-center h-16 mb-4 bg-gray-200 rounded-md">
        <div className="w-8 h-8 bg-black rounded-full" />
      </div> */}

      <div className="flex items-center justify-center h-16 mb-4 bg-gray-200 rounded-md">
        <img src="/logo.jpeg" alt="Logo" className="w-8 h-8 rounded-full" />
      </div>

      {/* Main Menu */}
      <nav className="flex flex-col space-y-2">
        <Link href="/pages/dashboard">
          <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaHome className="w-5 h-5 mr-3" />
            <span>Admin Dashboard</span>
          </div>
        </Link>


        <Link href="/pages/clients">
          <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaUser className="w-5 h-5 mr-3" />
            <span>Clients</span>
          </div>
        </Link>


        <Link href="/pages/employees">
          <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaUser className="w-5 h-5 mr-3" />
            <span>Employees</span>
          </div>
        </Link>

        <Link href="/pages/audience">
          <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaSalesforce className="w-5 h-5 mr-3" />
            <span>Sales</span>
          </div>
        </Link>


        <Link href="/pages/audience">
          <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaChartColumn className="w-5 h-5 mr-3" />
            <span>Accounting</span>
          </div>
        </Link>


        <Link href="/pages/audience">
          <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaPaypal className="w-5 h-5 mr-3" />
            <span>Payroll</span>
          </div>
        </Link>


        <Link href="/pages/audience">
          <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaFileAlt className="w-5 h-5 mr-3" />
            <span>Policies</span>
          </div>
        </Link>


        <Link href="/pages/audience">
          <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaFileArchive className="w-5 h-5 mr-3" />
            <span>Reports</span>
          </div>
        </Link>

        {/* <Link href="/pages/posts">
            <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
                <div className="flex items-center">
                <FaFileAlt className="w-5 h-5 mr-3" />
                <span>Posts</span>
                </div>
                <span className="bg-blue-500 text-white text-xs font-semibold rounded-full px-2 py-1">
                8
                </span>
            </div>
        </Link> */}

        <Link href="/pages/schedules">
            <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
                <div className="flex items-center">
                <FaCalendarAlt className="w-5 h-5 mr-3" />
                <span>Schedules</span>
                </div>
                <span className="bg-orange-500 text-white text-xs font-semibold rounded-full px-2 py-1">
                3
                </span>
            </div>
        </Link>
         

        {/* Collapsible Income Section */}
        <button
          onClick={toggleIncome}
          className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
        >
          <FaDollarSign className="w-5 h-5 mr-3" />
          <span>Income</span>
          {isIncomeOpen ? <FaChevronUp className="w-5 h-5 ml-auto" /> : <FaChevronDown className="w-5 h-5 ml-auto" />}
        </button>

        {isIncomeOpen && (
          <div className="ml-8 space-y-2 text-gray-600">
            <Link href="/income/earnings">
              <div className="block px-4 py-1 hover:bg-gray-200 rounded-md">Earnings</div>
            </Link>
            <Link href="/income/refunds">
              <div className="block px-4 py-1 hover:bg-gray-200 rounded-md">Refunds</div>
            </Link>
            <Link href="/income/declines">
              <div className="block px-4 py-1 hover:bg-gray-200 rounded-md">Declines</div>
            </Link>
            <Link href="/income/payouts">
              <div className="block px-4 py-1 hover:bg-gray-200 rounded-md">Payouts</div>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
