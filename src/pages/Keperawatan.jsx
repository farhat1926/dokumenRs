import { useState } from "react";
import { units } from "../data/units";

export default function Keperawatan() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedKategori, setSelectedKategori] = useState(null);
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(null); // "kategori" | "password"

  const units = [
    {
      nama: "Keperawatan",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1XZA_jwaFvbwgyQgnc2FFZJtSnCIjrjE6?hl=id",
          password: "keperawatan",
        },
        {
          nama: "Pedoman",
          drive: "https://drive.google.com/drive/folders/1XZA_jwaFvbwgyQgnc2FFZJtSnCIjrjE6?hl=id",
          password: "keperawatan",
        },
        {
          nama: "SPK & RKK",
          drive: "https://drive.google.com/drive/folders/1b8M-AiFBojww3W8oBUNBqSTMDFeH6AU1?usp=sharing",
          password: "keperawatan",
        },
        {
          nama: "SIP & STR",
          drive: "https://drive.google.com/drive/folders/1o5KhARODbxzjlLCZppUDj8fZ6Fyo1afR?usp=sharing",
          password: "keperawatan",
        },
        {
          nama: "Clinical Pathway",
          drive: "https://drive.google.com/drive/folders/1fBaCXeNSqBpj1GGEt7LjG6CUHgvM092_?usp=sharing",
          password: "keperawatan",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1AS-qQsARlhzbxgri5C5lpmKnvVAGLjRi?usp=sharing",
          password: "keperawatan",
        },
        {
          nama: "Panduan Praktek Klinis",
          drive: "https://drive.google.com/drive/folders/1-hIPRX5gf5FGUzCrOb1WtK-0TRDlNsP-?usp=sharing",
          password: "keperawatan",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/19HiVLN_6ENJ4ieGRRXhs3sOqzXPc_gcv?usp=sharing",
          password: "keperawatan",
        },
      ],
    },
      {
      nama: "Kebidanan",
      kategori: [
        {
          nama: "SOP",
          drive: "https://drive.google.com/drive/folders/1q1lxts9SNGP5YPOK0YlT4itXZ_5jpEob?usp=sharing",
          password: "kebidanan",
        },
        {
          nama: "Pedoman  ",
          drive: "https://drive.google.com/drive/folders/1q1lxts9SNGP5YPOK0YlT4itXZ_5jpEob?usp=sharing",
          password: "kebidanan",
        },
        {
          nama: "SPK & RKK",
          drive: "https://drive.google.com/drive/folders/1G0RzTuBs6B59JzY_5ofPVcN-zt-nf7h5?usp=sharing",
          password: "kebidanan",
        },
        {
          nama: "SIP & STR",
          drive: "https://drive.google.com/drive/folders/1VkGS2nRi-eqAlqoajXCYEnSBRAQR-c3k?usp=sharing",
          password: "kebidanan",
        },
        {
          nama: "Clinical Pathway",
          drive: "https://drive.google.com/drive/folders/15AFwH-NWZFRTOzQkIeTlJGceoS9hyFf_?usp=sharing",
          password: "kebidanan",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1yK4jAHtFlQpBxcBvr5oKF08u1y8q5FKi?usp=sharing",
          password: "kebidanan",
        },
        {
          nama: "Panduan Pelayanan Klinis",
          drive: "https://drive.google.com/drive/folders/1km8Hatu2Pj9Bc_Qz2CRGKc2jW-9ka2pa?usp=sharing",
          password: "kebidanan",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1iUOR8kzw5kx4XnggooHMGAxtEZDHuAV-?usp=sharing",
          password: "kebidanan",
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