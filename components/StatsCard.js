import {
  FileText,
  AlertTriangle,
  CircleCheckBig,
} from "lucide-react";

export default function StatsCards({
  total,
  urgent,
  normal,
}) {
  const stats = [
    {
      title: "Total Notices",
      value: total,
      icon: FileText,
      bg: "bg-blue-50",
      text: "text-blue-600",
      iconBg: "bg-blue-100",
    },
    {
      title: "Urgent",
      value: urgent,
      icon: AlertTriangle,
      bg: "bg-red-50",
      text: "text-red-600",
      iconBg: "bg-red-100",
    },
    {
      title: "Normal",
      value: normal,
      icon: CircleCheckBig,
      bg: "bg-green-50",
      text: "text-green-600",
      iconBg: "bg-green-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`${item.bg} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-white`}
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-500 text-sm">
                  {item.title}
                </p>

                <h2
                  className={`text-4xl font-bold mt-2 ${item.text}`}
                >
                  {item.value}
                </h2>
              </div>

              <div
                className={`${item.iconBg} p-4 rounded-2xl`}
              >
                <Icon
                  size={30}
                  className={item.text}
                />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}