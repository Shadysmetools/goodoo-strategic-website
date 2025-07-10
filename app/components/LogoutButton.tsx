"use client";
import { useAuth } from "../contexts/AuthContext";

export default function LogoutButton() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <button
      onClick={handleLogout}
      className="text-xs px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded shadow-sm ml-2"
      style={{ fontSize: "0.85rem", position: "relative", top: 0 }}
    >
      Logout
    </button>
  );
} 