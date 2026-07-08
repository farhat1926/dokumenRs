import { useState } from "react";

export default function Audit() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const units = [
    {
      nama: "Audit Radiologi",
      drive:
        "https://drive.google.com/drive/folders/1WGZYCsoG6V-TgBJepqNiQRGM0w6er6NJ?hl=id",
      password: "ibs",
    },
    {
      nama: "Instalasi Bedah Sentral (IBS)",
      drive:
        "https://drive.google.com/drive/folders/1WGZYCsoG6V-TgBJepqNiQRGM0w6er6NJ?hl=id",
      password: "ibs",
    },
    {
      nama: "Instalasi Rawat Jalan (Poliklinik)",
      drive:
        "https://drive.google.com/drive/folders/1j_ohVyuL9XkT371UEJRYVIQUMXvq9ag1?hl=id",
      password: "poliklinik",
    },
    {
      nama: "Instalasi Rawat Inap",
      drive:
        "https://drive.google.com/drive/folders/1c09ZldtoEhiVH42BCLWmN2y3yyYWH4zt?hl=id",
      password: "rawatinap",
    },
    {
      nama: "Instalasi Keperawatan Intensif (ICU)",
      drive:
        "https://drive.google.com/drive/folders/1hcFTBI62kupeTAodW1M3Vu1RdUfGm6ZS?hl=id",
      password: "icu",
    },
  ];

  const openUnit = (unit) => {
    setSelectedUnit(unit);
    setPassword("");
    setShowPassword(true);
  };

  const handleSubmit = () => {
    if (password === selectedUnit.password) {
      window.open(selectedUnit.drive, "_blank");
      resetAll();
    } else {
      alert("Password salah!");
    }
  };

  const resetAll = () => {
    setSelectedUnit(null);
    setPassword("");
    setShowPassword(false);
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-6">
        Dokumen Internal Rumah Sakit
      </h2>

      {/* LIST UNIT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {units.map((unit, index) => (
          <button
            key={index}
            onClick={() => openUnit(unit)}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg hover:bg-blue-50 transition text-left"
          >
            <h3 className="text-lg font-semibold text-blue-900">
              {unit.nama}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Klik untuk membuka dokumen
            </p>
          </button>
        ))}
      </div>

      {/* MODAL PASSWORD */}
      {showPassword && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 md:w-96 shadow-xl">
            <h3 className="text-xl font-bold mb-4">
              {selectedUnit?.nama}
            </h3>

            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit();
              }}
              className="w-full border rounded-lg p-3 mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={resetAll}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Batal
              </button>

              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
              >
                Masuk
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}