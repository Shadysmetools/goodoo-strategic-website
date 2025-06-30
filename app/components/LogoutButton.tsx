"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
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