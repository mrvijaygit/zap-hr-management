import Layout from '@/components/layout';
import React from 'react';

type User = {
  name: string;
  email: string;
  company: string;
  createdDate: string;
  role: string;
  profilePic: string;
};

export default function UserManagement() {
  // Mock data for users
  const users: User[] = [
    {
      name: 'Daniel Porter',
      email: '[email protected]',
      company: "Dreamguy's Technologies",
      createdDate: '1 Jan 2013',
      role: 'Admin',
      profilePic: 'https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_1280.png',
    },
    {
      name: 'John Doe',
      email: '[email protected]',
      company: "Dreamguy's Technologies",
      createdDate: '1 Jan 2013',
      role: 'Employee',
      profilePic: 'https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_1280.png',
    },
    {
      name: 'Richard Miles',
      email: '[email protected]',
      company: "Dreamguy's Technologies",
      createdDate: '1 Jan 2013',
      role: 'Employee',
      profilePic: 'https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_1280.png',
    },
    {
      name: 'John Smith',
      email: '[email protected]',
      company: "Dreamguy's Technologies",
      createdDate: '1 Jan 2013',
      role: 'Employee',
      profilePic: 'https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_1280.png',
    },
    {
      name: 'Mike Litorus',
      email: '[email protected]',
      company: "Dreamguy's Technologies",
      createdDate: '1 Jan 2013',
      role: 'Employee',
      profilePic: 'https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_1280.png',
    },
    {
      name: 'Wilmer Deluna',
      email: '[email protected]',
      company: "Dreamguy's Technologies",
      createdDate: '1 Jan 2013',
      role: 'Employee',
      profilePic: 'https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_1280.png',
    },
    {
      name: 'Barry Cuda',
      email: '[email protected]',
      company: 'Global Technologies',
      createdDate: '1 Jan 2013',
      role: 'Client',
      profilePic: 'https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_1280.png',
    },
  ];

  return (
    <Layout>
       <div className="p-8 min-h-screen text-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Employees</h1>
          <p className="text-gray-500">Dashboard / Employees</p>
        </div>
        <button className="p-2 bg-orange-500 text-white rounded">+ Add Employee</button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Name"
          className="border rounded p-2 flex-1"
        />
        <select className="border rounded p-2 flex-1">
          <option>Select Company</option>
          <option>Dreamguy Technologies</option>
          <option>Global Technologies</option>
        </select>
        <select className="border rounded p-2 flex-1">
          <option>Select Role</option>
          <option>Admin</option>
          <option>Employee</option>
          <option>Client</option>
        </select>
        <button className="p-2 bg-green-500 text-white rounded">SEARCH</button>
      </div>

      {/* Users Table */}
      <div className="bg-white shadow rounded">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="p-4 border-b">Name</th>
              <th className="p-4 border-b">Email</th>
              <th className="p-4 border-b">Company</th>
              <th className="p-4 border-b">Created Date</th>
              <th className="p-4 border-b">Role</th>
              <th className="p-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-4 border-b flex items-center gap-2">
                  <img
                    src={user.profilePic}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.role}</div>
                  </div>
                </td>
                <td className="p-4 border-b text-gray-500">{user.email}</td>
                <td className="p-4 border-b">{user.company}</td>
                <td className="p-4 border-b">{user.createdDate}</td>
                <td className="p-4 border-b">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      user.role === 'Admin'
                        ? 'bg-red-100 text-red-600'
                        : user.role === 'Employee'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="p-4 border-b text-center">
                  <button className="text-gray-500">
                    <i className="fas fa-ellipsis-v"></i>
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
}
