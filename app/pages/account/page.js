"use client";

import { useState, useEffect } from "react";

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState("");

  // Load user data from localStorage on component mount
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(currentUser);
    setNewName(currentUser?.name || "");
  }, []);

  const handleEdit = () => {
    if (editMode) {
      // Save the updated name to localStorage
      const updatedUser = { ...user, name: newName };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
    setEditMode(!editMode);
  };

  if (!user) {
    return <p>Loading...</p>; // Handle loading state if user data is not found
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-black shadow-md rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Account Details</h1>
        <p className="text-gray-700">This is your account page.</p>
        <div className="mt-4">
          {editMode ? (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-indigo-300 bg-white text-black"
              />
            </div>
          ) : (
            <p><span className="font-semibold text-lg">Name: </span>{user.name}</p>
          )}
        </div>

        <button
          onClick={handleEdit}
          className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          {editMode ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
}