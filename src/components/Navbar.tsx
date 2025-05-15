import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
      <span className="text-xl font-medium">Dashboard</span>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="w-9 h-9 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">
          Y
        </div>
      </div>
    </header>
  );
};

export default Navbar;
