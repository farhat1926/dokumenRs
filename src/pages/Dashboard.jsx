import { Link } from "react-router-dom";
import {
  FileText,
  Stethoscope,
  CalendarDays,
  LayoutDashboard,
} from "lucide-react";

import { units } from "../data/units";
import { komites } from "../data/komites";

export default function Dashboard() {
  const totalInstalasi = units.reduce(
    (total, unit) => total + unit.kategori.length,
    0
  );

  const totalKomite = komites.reduce(
    (total, komite) => total + komite.kategori.length,
    0
  );

  const totalDokumen = totalInstalasi + totalKomite;

  const stats = [
    {
      title: "Total Dokumen",
      value: totalDokumen,
      icon: <FileText size={28} />,
    },
    {
      title: "Dokumen Instalasi",
      value: totalInstalasi,
      icon: <Stethoscope size={28} />,
    },
    {
      title: "Dokumen Komite",
      value: totalKomite,
      icon: <CalendarDays size={28} />,
    },
  ];

  const menus = [
    {
      name: "SPO (Standar Prosedur Operasional)",
      path: "/SPO",
      icon: <Stethoscope size={22} />,
    },
    {
      name: "Pedoman dan Panduan",
      path: "/Pedoman",
      icon: <FileText size={22} />,
    },
    {
      name: (
        <span>
          Panduan Praktek Klinis dan <i>Clinical Pathway</i>
        </span>
      ),
      path: "/Clinical",
      icon: <CalendarDays size={22} />,
    },
    {
      name: "SPK (Surat Penugasan Klinis) & RKK (Rincian Kewenangan Klinis)",
      path: "/Spkrkk",
      icon: <CalendarDays size={22} />,
    },
    {
      name: "Mutu dan Keselamatan Pasien",
      path: "/Mutu",
      icon: <CalendarDays size={22} />,
    },
    {
      name: "Dokumen Akreditasi",
      path: "/Akreditasi",
      icon: <CalendarDays size={22} />,
    },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
          <LayoutDashboard />
          BERANDA
        </h2>

        <p className="text-gray-500 mt-1">
          Selamat datang di Intranet Rumah Sakit UMS A.R Fachrudin
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
          Sistem intranet ini digunakan untuk mengelola dokumen instalasi,
          dokumen komite, jadwal dokter, dan informasi unit rumah sakit secara
          terpusat.
        </p>
      </div>
    </div>
  );
}