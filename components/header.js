import { FaSearch, FaBell, FaCommentDots } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-400 to-pink-500 text-white flex items-center justify-between px-6 py-3 shadow-lg">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2E4dms2NmY4eHFqZjd5NXc2MTRvM2dvMHl1bXQzamdnNHl5MHY2MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oPYrWqRG7rzbO/giphy.webp" alt="SmartHR Logo" className="h-8 w-8" />
        </div>
        <h1 className="text-lg font-bold">ZAP Technologies</h1>
      </div>

      {/* Search and Options */}
      <div className="flex items-center space-x-6">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            className="px-4 py-1 rounded-full text-black"
          />
          <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Language Selector */}
        <div className="flex items-center space-x-2">
          <img src="/logo.jpeg" alt="English" className="h-4 w-6" />
          <span>English</span>
        </div>

        {/* Notifications */}
        <div className="relative">
          <FaBell size={20} />
          <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs rounded-full px-1">3</span>
        </div>

        {/* Messages */}
        <div className="relative">
          <FaCommentDots size={20} />
          <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs rounded-full px-1">8</span>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.jpeg"
            alt="Admin Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
