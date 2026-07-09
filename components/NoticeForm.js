
import { useEffect, useState } from "react";

export default function NoticeForm({
  initialValues,
  onSubmit,
  loading,
  buttonText,
}) {
  const [formData, setFormData] = useState(initialValues);
  
  useEffect(() => {
        setFormData(initialValues);
        }, [initialValues]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-8 space-y-6"
    >
      <h2 className="text-3xl font-bold text-gray-800">
        Notice Details
      </h2>

      {/* Title */}

      <div>
        <label className="block mb-2 font-medium">
          Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Body */}

      <div>
        <label className="block mb-2 font-medium">
          Description
        </label>

        <textarea
          rows="5"
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Category */}

      <div>
        <label className="block mb-2 font-medium">
          Category
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="GENERAL">General</option>
          <option value="EVENT">Event</option>
          <option value="EXAM">Exam</option>
        </select>
      </div>

      {/* Priority */}

      <div>
        <label className="block mb-3 font-medium">
          Priority
        </label>

        <div className="grid grid-cols-2 gap-4">

          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                priority: false,
              })
            }
            className={`rounded-xl border p-4 transition ${
              !formData.priority
                ? "bg-green-600 text-white border-green-600"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Normal
          </button>

          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                priority: true,
              })
            }
            className={`rounded-xl border p-4 transition ${
              formData.priority
                ? "bg-red-600 text-white border-red-600"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Urgent
          </button>

        </div>
      </div>

      {/* Publish Date */}

      <div>
        <label className="block mb-2 font-medium">
          Publish Date
        </label>

        <input
          type="date"
          name="publishDate"
          value={formData.publishDate}
          onChange={handleChange}
          required
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Image */}

      <div>
        <label className="block mb-2 font-medium">
          Image URL (Optional)
        </label>

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <button
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold disabled:opacity-50"
      >
        {loading ? "Please wait..." : buttonText}
      </button>

    </form>
  );
}