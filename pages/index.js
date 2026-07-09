import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import NoticeCard from "../components/NoticeCard";
import SearchFilter from "../components/SearchFilter";
import StatsCards from "../components/StatsCard";
import DeleteModal from "../components/DeleteModal";
import toast from "react-hot-toast";

export default function Home() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");

  const [deleteId, setDeleteId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  async function fetchNotices() {
  try {
    setLoading(true);

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

  async function handleDeleteNotice() {
  try {
    setDeleteLoading(true);

    await axios.delete(`/api/notices/${deleteId}`);

    toast.success("Notice deleted");

    setDeleteId(null);

    fetchNotices();
  } catch (error) {
    toast.error("Unable to delete notice");
  } finally {
    setDeleteLoading(false);
  }
}

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
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredNotices.map((notice) => (
              <NoticeCard
                key={notice.id}
                notice={notice}
                onDelete={(id) => setDeleteId(id)}
              />
            ))}
          </div>
        )}

      </main>
       <DeleteModal
      open={deleteId !== null}
      onClose={() => setDeleteId(null)}
      onConfirm={handleDeleteNotice}
      loading={deleteLoading}
      />
    </div>
  );
}