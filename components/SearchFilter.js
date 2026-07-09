import { Search } from "lucide-react";

export default function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">

        {/* Search */}

        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search notices..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="md:w-60 rounded-xl border border-gray-200 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
        >
          <option value="ALL">All Categories</option>
          <option value="EXAM">Exam</option>
          <option value="EVENT">Event</option>
          <option value="GENERAL">General</option>
        </select>

      </div>
    </div>
  );
}