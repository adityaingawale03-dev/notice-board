import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import NoticeForm from "../components/NoticeForm";

export default function AddNotice() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const initialValues = {
    title: "",
    body: "",
    category: "GENERAL",
    priority: false,
    publishDate: "",
    image: "",
  };

  async function handleCreateNotice(formData) {
    try {
      setLoading(true);

      await axios.post("/api/notices", formData);

      toast.success("Notice created successfully!");

      router.push("/");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8">

        <NoticeForm
          initialValues={initialValues}
          onSubmit={handleCreateNotice}
          loading={loading}
          buttonText="Create Notice"
        />

      </main>
    </div>
  );
}