import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import NoticeCard from "../components/NoticeCard";
import SearchFilter from "../components/SearchFilter";
import StatsCards from "../components/StatsCard";

export default function Home() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");

  async function fetchNotices() {
    try {
      const res = await axios.get("/api/notices");
      setNotices(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNotices();
  }, []);

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      notice.body.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "ALL" || notice.category === category;

    return matchesSearch && matchesCategory;
  });

  const totalNotices = filteredNotices.length;

  const urgentNotices = filteredNotices.filter(
    (notice) => notice.priority
  ).length;

  const normalNotices = filteredNotices.filter(
    (notice) => !notice.priority
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">

        <SearchFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />
          <StatsCards
          total={totalNotices}
          urgent={urgentNotices}
          normal={normalNotices}
        />

        {loading ? (
          <div className="text-center py-20 text-gray-500">
            Loading notices...
          </div>
        ) : filteredNotices.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-700">
              No Notices Found
            </h2>

            <p className="text-gray-500 mt-2">
              Create your first notice.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredNotices.map((notice) => (
              <NoticeCard
                key={notice.id}
                notice={notice}
                onDelete={() => {}}
              />
            ))}
          </div>
        )}

      </main>
    </div>
  );
}