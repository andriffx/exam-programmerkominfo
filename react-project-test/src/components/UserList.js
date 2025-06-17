import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Cari nama..."
        className="border p-2 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <div className="flex justify-center items-center h-20">
          <svg
            className="animate-spin h-10 w-10 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
          <p className="ml-2">Memuat data...</p>
        </div>
      ) : (
        <ul className="mt-4 border p-4 h20">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              className="cursor-pointer p-2 hover:text-color-accent"
              onClick={() => onSelectUser(user)}
            >
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
