import React from "react";

const UserDetail = ({ user, onBack }) => {
  if (!user) return null;

  return (
    <div className="p-4 border mt-4">
      <h2 className="text-xl font-bold mb-4">{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Telepon: {user.phone}</p>
      <p>Alamat: {user.address.street}, {user.address.city}</p>
      <p>Perusahaan: {user.company.name}</p>
      <button onClick={onBack} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:text-color-accent">
        Kembali ke daftar
      </button>
    </div>
  );
};

export default UserDetail;