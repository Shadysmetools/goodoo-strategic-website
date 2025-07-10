"use client";
import { useAuth } from '../contexts/AuthContext';
import { usePathname } from 'next/navigation';

export default function ConditionalLogoutButton() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  // Don't show logout button if user is not authenticated or on login page
  if (!user || pathname === '/login') {
    return null;
  }

  return (
    <div className="absolute top-4 right-6 z-50">
      <button
        onClick={logout}
        className="text-xs px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded shadow-sm transition-colors"
        style={{ fontSize: "0.85rem" }}
      >
        Logout
      </button>
    </div>
  );
} 