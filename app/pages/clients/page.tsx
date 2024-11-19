import React from 'react';
import Layout from "../../../components/layout";

type Client = {
  name: string;
  company: string;
  role: string;
  image: string;
};

export default function Clients() {
  // Sample data for clients
  const clients: Client[] = [
    {
      name: 'Barry Cuda',
      company: 'Global Technologies',
      role: 'CEO',
      image: 'https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_1280.png',
    },
    {
      name: 'Tressa Wexler',
      company: 'Delta Infotech',
      role: 'Manager',
      image: 'https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_1280.png',
    },
    {
      name: 'Ruby Bartlett',
      company: 'Cream Inc',
      role: 'CEO',
      image: 'https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_1280.png',
    },
    {
      name: 'Misty Tison',
      company: 'Wellware Company',
      role: 'CEO',
      image: 'https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_1280.png',
    },
  ];

  // Header Component
  const Header: React.FC = () => (
    <div className="flex justify-between items-center mb-4">
      <div>
        <h1 className="text-2xl font-bold">Clients</h1>
        <p className="text-gray-500">Dashboard / Clients</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 bg-gray-200 rounded">
          <i className="fas fa-th"></i>
        </button>
        <button className="p-2 bg-gray-200 rounded">
          <i className="fas fa-bars"></i>
        </button>
        <button className="p-2 bg-orange-500 text-white rounded">+ Add Client</button>
      </div>
    </div>
  );

  // Filters Component
  const Filters: React.FC = () => (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Client ID"
        className="border rounded p-2 flex-1"
      />
      <input
        type="text"
        placeholder="Client Name"
        className="border rounded p-2 flex-1"
      />
      <select className="border rounded p-2">
        <option>Select Company</option>
        <option>Global Technologies</option>
        <option>Delta Infotech</option>
      </select>
      <button className="p-2 bg-green-500 text-white rounded">Search</button>
    </div>
  );

  // Client Card Component
  const ClientCard: React.FC<Client> = ({ name, company, role, image }) => (
    <div className="border rounded p-4 shadow-sm bg-white">
      <img
        src={image}
        alt={name}
        className="rounded-full w-16 h-16 mx-auto mb-2"
      />
      <h2 className="text-center font-bold">{company}</h2>
      <p className="text-center text-gray-500">{name}</p>
      <p className="text-center text-gray-400 text-sm">{role}</p>
      <div className="flex justify-around mt-4">
        <button className="text-blue-500">Message</button>
        <button className="text-green-500">View Profile</button>
      </div>
    </div>
  );

  return (
    <Layout>
        <div className="p-8 min-h-screen text-black">
            {/* Header */}
            <Header />

            {/* Filters */}
            <Filters />

            {/* Client Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {clients.map((client, index) => (
                <ClientCard
                    key={index}
                    name={client.name}
                    company={client.company}
                    role={client.role}
                    image={client.image}
                />
                ))}
            </div>
        </div>

    </Layout>
    
  );
}
