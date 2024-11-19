import Sidebar from './Sidebar';
import Header from './Header'; // Import the Header component

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      {/* Full-width Header */}
      <Header className="w-full" />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar on the left */}
        <Sidebar className="h-screen sticky top-0" />

        {/* Scrollable main content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">{children}</div>
      </div>
    </div>
  );
}
