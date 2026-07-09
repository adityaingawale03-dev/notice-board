import Link from "next/link";
import { Plus } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg">
            📢
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              Notice Board
            </h1>

            <p className="text-xs text-gray-500 hidden sm:block">
              Stay informed. Stay updated.
            </p>
          </div>
        </Link>

        <Link
          href="/add"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg"
        >
          <Plus size={18} />

          <span className="hidden sm:inline">
            Add Notice
          </span>
        </Link>
      </div>
    </header>
  );
}