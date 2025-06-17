"use client"
import UserList from "@/components/UserList";
import UserDetail from "@/components/UserDetail";
import { useState } from "react";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 justify-center items-center flex">Daftar Pengguna</h1>
      {!selectedUser ? (
        <UserList onSelectUser={setSelectedUser} />
      ) : (
        <UserDetail user={selectedUser} onBack={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default App