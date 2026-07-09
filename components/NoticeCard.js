import Link from "next/link";
import { CalendarDays, Pencil, Trash2, BookOpen, Megaphone, ClipboardList } from "lucide-react";

export default function NoticeCard({ notice, onDelete }) {
  const categoryIcons = {
    EXAM: <BookOpen size={18} />,
    EVENT: <Megaphone size={18} />,
    GENERAL: <ClipboardList size={18} />,
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center p-5 border-b">

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {notice.title}
          </h2>

          <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">

            <span className="flex items-center gap-1">
              {categoryIcons[notice.category]}
              {notice.category}
            </span>

            <span className="flex items-center gap-1">
              <CalendarDays size={16} />
              {new Date(notice.publishDate).toLocaleDateString()}
            </span>

          </div>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            notice.priority
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {notice.priority ? "Urgent" : "Normal"}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">

        <p className="text-gray-600 leading-relaxed">
          {notice.body}
        </p>

        {notice.image && (
          <img
            src={notice.image}
            alt={notice.title}
            className="mt-4 rounded-xl w-full h-56 object-cover"
          />
        )}

      </div>

      {/* Footer */}
      <div className="flex justify-end gap-3 p-5 bg-gray-50">

        <Link
          href={`/edit/${notice.id}`}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
        >
          <Pencil size={18} />
          Edit
        </Link>

        <button
          onClick={() => onDelete(notice.id)}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          <Trash2 size={18} />
          Delete
        </button>

      </div>

    </div>
  );
}