import { useState } from "react";

export default function Dokumen() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedKategori, setSelectedKategori] = useState(null);
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(null); // "kategori" | "password"

  const units = [
    {
      nama: "IGD",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1We3zDIt7gaove0UYPhQssQRnO41ymbXT?hl=id",
          password: "igd",
        },
      ],
    },
    {
      nama: "Keperawatan",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1XZA_jwaFvbwgyQgnc2FFZJtSnCIjrjE6?hl=id",
          password: "keperawatan",
        },
      ],
    },
    {
      nama: "Poliklinik",
      kategori: [
        {
          nama: "SOP",
          drive: "https://drive.google.com/drive/folders/1j_ohVyuL9XkT371UEJRYVIQUMXvq9ag1?hl=id",
          password: "poliklinik",
        },
      ],
    },
    {
      nama: "Rawat Inap",
      kategori: [
        {
          nama: "SOP",
          drive: "https://drive.google.com/drive/folders/1c09ZldtoEhiVH42BCLWmN2y3yyYWH4zt?hl=id",
          password: "rawatinap",
        },
      ],
    },
    {
      nama: "IBS",
      kategori: [
        {
          nama: "SOP ",
          drive: "https://drive.google.com/drive/folders/1WGZYCsoG6V-TgBJepqNiQRGM0w6er6NJ?hl=id",
          password: "ibs",
        },
      ],
    },
    {
      nama: "ICU",
      kategori: [
        {
          nama: "SOP",
          drive: "https://drive.google.com/drive/folders/1hcFTBI62kupeTAodW1M3Vu1RdUfGm6ZS?hl=id",
          password: "icu",
        },
      ],
    },
    {
      nama: "Perina",
      kategori: [
        {
          nama: "SOP",
          drive: "https://drive.google.com/drive/folders/13t9ZbniMeoOP3OxWVdaheYqFlrv3fn7y?usp=sharing",
          password: "perina",
        },
      ],
    },

  ];

  const openUnit = (unit) => {
    setSelectedUnit(unit);
    setStep("kategori");
  };

  const openKategori = (kat) => {
    setSelectedKategori(kat);
    setStep("password");
    setPassword("");
  };

  const handleSubmit = () => {
    if (password === selectedKategori.password) {
      window.open(selectedKategori.drive, "_blank");
      resetAll();
    } else {
      alert("Password salah!");
    }
  };

  const resetAll = () => {
    setSelectedUnit(null);
    setSelectedKategori(null);
    setStep(null);
    setPassword("");
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
              Klik untuk lihat dokumen
            </p>
          </button>
        ))}
      </div>

      {/* MODAL PILIH KATEGORI */}
      {step === "kategori" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-80 md:w-96">
            <h3 className="text-xl font-bold mb-4">
              {selectedUnit?.nama}
            </h3>

            <div className="flex flex-col gap-3">
              {selectedUnit?.kategori.map((kat, i) => (
                <button
                  key={i}
                  onClick={() => openKategori(kat)}
                  className="p-3 border rounded-lg hover:bg-blue-50 text-left"
                >
                  📁 {kat.nama}
                </button>
              ))}
            </div>

            <button
              onClick={resetAll}
              className="mt-4 text-sm text-gray-500"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* MODAL PASSWORD */}
      {step === "password" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-80 md:w-96">
            <h3 className="text-xl font-bold mb-4">
              {selectedKategori?.nama}
            </h3>

            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg p-3 mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setStep("kategori")}
                className="px-4 py-2 border rounded-lg"
              >
                Kembali
              </button>

              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-900 text-white rounded-lg"
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