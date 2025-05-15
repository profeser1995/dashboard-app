import { useEffect, useState } from "react";
import { api } from "../services/api";

const SummaryCards = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    api.get("users?page=1")
      .then((res) => {
        setTotalUsers(res.data.total);
        setActiveUsers(Math.floor(res.data.total / 2)); // Fake logic: half are active
      });
  }, []);

  return (
    // <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
    //   <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
    //     <h3 className="text-sm text-gray-500 dark:text-gray-300">Total Users</h3>
    //     <p className="text-xl font-bold">{totalUsers}</p>
    //   </div>
    //   <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
    //     <h3 className="text-sm text-gray-500 dark:text-gray-300">Active Users</h3>
    //     <p className="text-xl font-bold">{activeUsers}</p>
    //   </div>
    //   <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
    //     <h3 className="text-sm text-gray-500 dark:text-gray-300">Remaining (Mock)</h3>
    //     <p className="text-xl font-bold">{totalUsers - activeUsers}</p>
    //   </div>
    // </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
  {[
    { title: "Total Users", value: totalUsers },
    { title: "Active Users", value: activeUsers },
    { title: "Remaining", value: totalUsers - activeUsers },
  ].map((card, i) => (
    <div
      key={i}
      className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-md transition-all"
    >
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{card.title}</p>
      <p className="text-2xl font-semibold">{card.value}</p>
    </div>
  ))}
</div>

  );
};

export default SummaryCards;
