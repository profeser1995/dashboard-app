import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClasses = ({ isActive }: any) =>
    `block px-4 py-2 rounded-md transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    }`;

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-700 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-8">Admin Panel</h1>
      <nav className="space-y-2">
        <NavLink to="/" className={linkClasses}>🏠 Dashboard</NavLink>
        <NavLink to="/users" className={linkClasses}>👤 Users</NavLink>
        <NavLink to="/reports" className={linkClasses}>📄 Reports</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
