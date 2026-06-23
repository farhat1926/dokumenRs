import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Dokumen Komite", path: "/Klinik" },
    { name: "Dokumen Instalasi", path: "/Dokumen" },
    { name: "Dokumen SDM", path: "/SDM" },
    { name: "Dokumen Penunjang", path: "/Penunjang" },
    { name: "Dokumen Pelayanan Medis", path: "/Medis" },
    { name: "Dokumen Keperawatan & Kebidanan", path: "/Keperawatan" },
    { name: "Dokumen Keuangan", path: "/Keuangan" },
    { name: "Dokumen Sarana & Prasarana", path: "/Sarana" },
  ];

  return (
    <>
      {/* Overlay mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:static z-50
          w-64 sm:w-72
          bg-blue-900 text-white
          min-h-screen p-5
          transform ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 transition-all duration-300
        `}
      >
        {/* LOGO */}
        <h1 className="text-xl md:text-2xl font-bold mb-8">
          Intranet RS
        </h1>

        {/* MENU */}
        <nav className="flex flex-col gap-3 text-base md:text-lg">
          {menu.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded-lg transition
                ${
                  location.pathname === item.path
                    ? "bg-blue-700"
                    : "hover:bg-blue-800"
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}