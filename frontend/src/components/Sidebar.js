import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-200 h-full p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/admin-dashboard" className="block p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Admin Dashboard
          </Link>
        </li>
        <li>
          <Link to="/faculty-dashboard" className="block p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Faculty Dashboard
          </Link>
        </li>
        <li>
          <Link to="/student-dashboard" className="block p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Student Dashboard
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
