import { useState } from "react";


export default function SDM() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedKategori, setSelectedKategori] = useState(null);
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(null); // "kategori" | "password"

  const units = [
      {
      nama: "Kesekretariatan",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/10sNrgqlsxjyKkvInL78Zrb05D2VSTtlF?usp=sharing",
          password: "sekertaris",
        },
        {
          nama: "Pedoman dan panduan",
          drive: "https://drive.google.com/drive/folders/15Z1NHvzR8ItNpqCYD7Rn0DQRHpjKKS2z?usp=sharing",
          password: "sekertaris",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1ej0pJFqzhI8LHx1a9SaCqe-js6UpRJUS?usp=sharing",
          password: "sekertaris",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/13NuyBmFFGY6JxVyPBVhCqm7ZFj91EsOO?usp=drive_link",
          password: "sekertaris",
        }
      ],
    },
     {
      nama: "Kepegawaian",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1v766tzjZjIF-O9vjVA86S2fWgk6xxcsG?usp=sharing",
          password: "kepegawaian",
        },
        {
          nama: "Pedoman dan panduan",
          drive: "https://drive.google.com/drive/folders/1bPpdZauKixTHzOKb8J3MGEIKsXdSxF9l?usp=sharing",
          password: "kepegawaian",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1rOF9e8GdmI7jdc5jo9SLi-6I2Cgzcl1-?usp=sharing",
          password: "kepegawaian",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1jk3W44Tbz6uhqvX3k9xeqNLw2d4k1er9?usp=sharing",
          password: "kepegawaian",
        },
        {
          nama: "Data Pegawai",
          drive: "https://drive.google.com/drive/folders/145XwwxMwBJwLP9wRR35v5qv_SgE9bXJW?usp=sharing",
          password: "kepegawaian",
        }
      ],
    },
     {
      nama: "Pendidikan dan Pelatihan (DIKLAT)",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1ou0BrkyW7hrGhFhyvHhRh1bDdeSsrGhR?usp=sharing",
          password: "diklat",
        },
        {
          nama: "Pedoman dan panduan",
          drive: "https://drive.google.com/drive/folders/1FjLqss2RTlHlG-LH-nEFV4h8EN-Ualku?usp=sharing",
          password: "diklat",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1lm36CPU1dqrR63IEoM0c76OOORNmzrYV?usp=sharing",
          password: "diklat",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1uhzRj5uCGkYfgmZIh1gdOHj9b3TMFSoB?usp=sharing",
          password: "diklat",
        }
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
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] flex flex-col">

      <div className="p-6 border-b">
        <h3 className="text-xl font-bold">
          {selectedUnit?.nama}
        </h3>
      </div>

      {/* Scroll di sini */}
      <div className="flex-1 overflow-y-auto p-6 space-y-3">
        {selectedUnit?.kategori.map((kat, i) => (
          <button
            key={i}
            onClick={() => openKategori(kat)}
            className="w-full p-3 border rounded-lg hover:bg-blue-50 text-left"
          >
            📁 {kat.nama}
          </button>
        ))}
      </div>

      <div className="p-6 border-t">
        <button
          onClick={resetAll}
          className="w-full bg-gray-200 rounded-lg py-2 hover:bg-gray-300"
        >
          Tutup
        </button>
      </div>

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