import { useEffect, useState } from "react";
import { api } from "../services/api";
import Pagination from "./Pagination";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    api.get(`users?page=${page}`)
      .then((res) => {
        setUsers(res.data.data);
        setTotalPages(res.data.total_pages);
        setError("");
      })
      .catch(() => setError("Error loading users."))
      .finally(() => setLoading(false));
  }, [page]);

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
        <table className="min-w-full border-separate border-spacing-y-2">
  <thead>
    <tr className="text-left bg-gray-100 dark:bg-gray-700 rounded">
      <th className="p-3">Avatar</th>
      <th className="p-3">Name</th>
      <th className="p-3">Email</th>
    </tr>
  </thead>
  <tbody>
    {filteredUsers.map((user) => (
      <tr
        key={user.id}
        className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition rounded shadow-sm"
      >
        <td className="p-3">
          <img src={user.avatar} className="w-10 h-10 rounded-full" />
        </td>
        <td className="p-3">{user.first_name} {user.last_name}</td>
        <td className="p-3">{user.email}</td>
      </tr>
    ))}
  </tbody>
</table>


          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}
    </div>
  );
};

export default UserTable;
