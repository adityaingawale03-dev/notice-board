import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";

import Navbar from "../../components/Navbar";
import NoticeForm from "../../components/NoticeForm";

export default function EditNotice() {
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    if (id) {
      fetchNotice();
    }
  }, [id]);

  async function fetchNotice() {
    try {
      const res = await axios.get(`/api/notices/${id}`);
      setNotice(res.data);
    } catch (error) {
      toast.error("Unable to load notice");
    }
  }

  async function handleUpdateNotice(formData) {
    try {
      setLoading(true);

      await axios.put(`/api/notices/${id}`, formData);

      toast.success("Notice updated successfully!");

      router.push("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  if (!notice) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <NoticeForm
          initialValues={notice}
          onSubmit={handleUpdateNotice}
          loading={loading}
          buttonText="Update Notice"
        />
      </main>
    </div>
  );
}