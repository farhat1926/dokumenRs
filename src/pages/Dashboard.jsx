import { Link } from "react-router-dom";
import { FileText, Stethoscope, CalendarDays, LayoutDashboard } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { title: "Total Dokumen", value: "128", icon: <FileText size={28} /> },
    { title: "Unit Klinik", value: "12", icon: <Stethoscope size={28} /> },
    { title: "Jadwal Hari Ini", value: "24", icon: <CalendarDays size={28} /> },
  ];

  const menus = [
    {
      name: "Klinik",
      path: "/klinik",
      icon: <Stethoscope size={22} />,
    },
    {
      name: "Dokumen",
      path: "/dokumen",
      icon: <FileText size={22} />,
    },
    {
      name: "Jadwal Dokter",
      path: "/jadwal",
      icon: <CalendarDays size={22} />,
    },
  ];

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
          <LayoutDashboard /> Dashboard
        </h2>
        <p className="text-gray-500 mt-1">
          Selamat datang di intranet rumah sakit
        </p>
      </div>

      {/* STATISTIK */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-5 flex items-center justify-between"
          >
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h3 className="text-2xl font-bold">{item.value}</h3>
            </div>
            <div className="text-blue-900">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* MENU CEPAT */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Menu Cepat</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {menus.map((menu, i) => (
            <Link
              key={i}
              to={menu.path}
              className="bg-blue-900 text-white rounded-xl p-5 flex items-center gap-3 hover:bg-blue-800 transition"
            >
              {menu.icon}
              <span className="font-medium">{menu.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* INFO TAMBAHAN */}
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="font-semibold mb-2">Informasi</h3>
        <p className="text-gray-600 text-sm">
          Sistem intranet ini digunakan untuk mengelola dokumen, jadwal dokter,
          dan informasi unit rumah sakit secara terpusat.
        </p>
      </div>

    </div>
  );
}