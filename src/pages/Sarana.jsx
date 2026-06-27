import { useState } from "react";


export default function Sarana() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedKategori, setSelectedKategori] = useState(null);
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(null); // "kategori" | "password"

  const units = [
      {
      nama: "IT",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1q1lxts9SNGP5YPOK0YlT4itXZ_5jpEob?usp=sharing",
          password: "it",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1ogDRyMcgrxGwkdivgRexNdvjeRf4PyQr?usp=sharing",
          password: "it",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/13A-0wqt1oW11Xh2I_txebMwW3b7n6SHZ?usp=sharing",
          password: "it",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1LroEbrQVUiOTpNPCI8pDCxdo_64BMNvC?usp=sharing",
          password: "it",
        },
      ],
    },
      {
      nama: "IPSRS",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1oOrg4DP9Mts-bAM2q77WfWF2XkXUzPuc?usp=sharing",
          password: "ipsrs",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1S44CnTeFuB7bTS-AmAHoylrmxfgZpTvb?usp=sharing",
          password: "ipsrs",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1n-SU2WMyNPhZRWL4AeFLWy2lFNY7CpOG?usp=sharing",
          password: "ipsrs",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1Wbiw6GvBJQaSfbtcZwTyrv4u8RkocsBV?usp=sharing",
          password: "ipsrs",
        },
        
      ],
    },
      {
      nama: "CSSD",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1p_lbp3mAV7-MJ00Wr5EdG0npTwS2eFmC?usp=sharing",
          password: "cssd",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1txa4iz63umf2m9QZdK3I--2u7UNM9M9w?usp=sharing",
          password: "cssd",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1XCjUCLbswJtarTVyU3PVkZ5CeLHQSsym?usp=sharing",
          password: "cssd",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/11r-_PX0tGoGjf18fm0mHrJdK77G8rasl?usp=sharing",
          password: "cssd",
        },
        
      ],
    },
      {
      nama: "Linen & Laundry",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1jeIRe1Tv86CpdqsgqGFmgvUqktSQ5rF2?usp=sharing",
          password: "linenlaundry",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1PAALtZHt2eQ6zIWALj2G6XEenVnEIyJe?usp=sharing",
          password: "linenlaundry",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1MNfs06GE6FB3yP5Gblf26oycw5F90L10?usp=sharing",
          password: "linenlaundry",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1omPRJfdzvBjV-9-BW8tQRcN7BJikK9uj?usp=sharing",
          password: "linenlaundry",
        },
        
      ],
    },
      {
      nama: "Sanitasi Lingkungan",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/17wgnv8sEtO8RSRrfK0g67P7Gmx0A5glU?usp=sharing",
          password: "sanitasilingkungan",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1yU9Fm1_pCIXMKlKmy3Bc4qOMzyLKvS8U?usp=sharing",
          password: "sanitasilingkungan",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1KQVfFmhEr2frT4LZIZDUGUHwDXMPTKxG?usp=sharing",
          password: "sanitasilingkungan",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1rNn8haR-8N3Z0u4pa6Oo1aSzRb7u5YCo?usp=sharing",
          password: "sanitasilingkungan",
        },
        
      ],
    },
      {
      nama: "Unit Keamanan",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1m2qgOGZaEbzT5RRuellFC-K9CVO1KY6x?usp=sharing",
          password: "unitkeamanan",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1tl6l2eoPrGI5cSl1oJijjtbqDhm27FbT?usp=sharing",
          password: "unitkeamanan",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1ChyVveF3bKhldcOijcH8G4KfKjLEN72_?usp=sharing",
          password: "unitkeamanan",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1wBquF44nbV4sGuSGkBXTJbwbYf8FT4IF?usp=sharing",
          password: "unitkeamanan",
        },
        
      ],
    },
      {
      nama: "Unit Kebersihan",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1aHCyuutan94YPTBLMa57OEkuWEwZajmx?usp=sharing",
          password: "unitkebersihan",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1G89noQfIgJWlYT7a3TaEsHMJuABo3J5_?usp=sharing",
          password: "unitkebersihan",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1MMXbFIfn217S0MqiChavAdKawfCCndNM?usp=sharing",
          password: "unitkebersihan",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1GgqWw3ySUATuUPidevt98zZYXqzXsDYj?usp=sharing",
          password: "unitkebersihan",
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