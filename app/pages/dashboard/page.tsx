import Layout from "../../../components/layout";
import { FaCubes, FaDollarSign, FaGem, FaUser } from "react-icons/fa";

type CardProps = {
  icon: React.ReactNode;
  count: number;
  label: string;
};

const holidays = [
    { name: "Christmas Holiday", date: "25 - Dec", day: "Wednesday" },
    { name: "New Year Holiday", date: "1 - Jan", day: "Wednesday" },
    { name: "Pongal Holiday", date: "14 - Jan", day: "Tuesday" },
    { name: "Pongal Holiday", date: "15 - Jan", day: "Wednesday" },
    { name: "Republic Day", date: "26 - Jan", day: "Sunday" },
    { name: "Tamil New Year", date: "14 - Apr", day: "Monday" },
  ];

export default function Dashboard() {
  return (
    <Layout>
      <div className="p-8 text-black">
        <h1 className="text-3xl font-bold mb-2">Welcome Admin!</h1>
        <p className="text-gray-500 mb-8">Dashboard</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card icon={<FaCubes size={24} />} count={112} label="Projects" />
          <Card icon={<FaDollarSign size={24} />} count={44} label="Clients" />
          <Card icon={<FaGem size={24} />} count={37} label="Tasks" />
          <Card icon={<FaUser size={24} />} count={218} label="Employees" />
        </div>


        {/* Holiday and Birthday Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            
          {/* Upcoming Holidays */}
          <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Upcoming Holidays</h2>
                <ul className="max-h-48 overflow-y-auto">
                {holidays.map((holiday, index) => (
                    <li key={index} className="flex justify-between py-2 border-b last:border-none">
                    <div className="text-black font-medium">{holiday.name}</div>
                    <div className="text-right">
                        <div className="text-gray-600 font-medium">{holiday.date}</div>
                        <div className="text-gray-400">{holiday.day}</div>
                    </div>
                    </li>
                ))}
                </ul>
          </div>

          {/* Birthday */}
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-4">Birthday</h2>
            <div className="flex flex-col items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.1 0-2-.9-2-2 0-1.1.9-2 2-2s2 .9 2 2c0 1.1-.9 2-2 2zm0 4c2.21 0 4 1.79 4 4v1H8v-1c0-2.21 1.79-4 4-4zM7 12h.01M17 12h.01M12 15h0"
                />
              </svg>
              <p>No birthdays today</p>
            </div>
          </div>


          <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Anniversay</h2>
                <ul className="max-h-48 overflow-y-auto">
                {holidays.map((holiday, index) => (
                    <li key={index} className="flex justify-between py-2 border-b last:border-none">
                    <div className="text-black font-medium">{holiday.name}</div>
                    <div className="text-right">
                        <div className="text-gray-600 font-medium">{holiday.date}</div>
                        <div className="text-gray-400">{holiday.day}</div>
                    </div>
                    </li>
                ))}
                </ul>
          </div>
        </div>



        {/* Holiday and Birthday Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
            
          {/* Upcoming Holidays */}
          <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">New Hires</h2>
                <ul className="max-h-48 overflow-y-auto">
                {holidays.map((holiday, index) => (
                    <li key={index} className="flex justify-between py-2 border-b last:border-none">
                    <div className="text-black font-medium">{holiday.name}</div>
                    <div className="text-right">
                        <div className="text-gray-600 font-medium">{holiday.date}</div>
                        <div className="text-gray-400">{holiday.day}</div>
                    </div>
                    </li>
                ))}
                </ul>
          </div>


          {/* Upcoming Holidays */}
          <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Leave Request</h2>
                <ul className="max-h-48 overflow-y-auto">
                {holidays.map((holiday, index) => (
                    <li key={index} className="flex justify-between py-2 border-b last:border-none">
                    <div className="text-black font-medium">{holiday.name}</div>
                    <div className="text-right">
                        <div className="text-gray-600 font-medium">{holiday.date}</div>
                        <div className="text-gray-400">{holiday.day}</div>
                    </div>
                    </li>
                ))}
                </ul>
          </div>

          

        </div>

        
      </div>
    </Layout>
  );
}

function Card({ icon, count, label }: CardProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full text-orange-500">
        {icon}
      </div>
      <div className="text-right">
        <h2 className="text-2xl font-bold">{count}</h2>
        <p className="text-gray-500">{label}</p>
      </div>
    </div>
  );
}
