import { useState } from "react";


export default function Keuangan() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedKategori, setSelectedKategori] = useState(null);
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(null); // "kategori" | "password"

  const units = [
     {
      nama: <i>Billing</i>,
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1vLDvyms-X5jvjKbLpiXG5MC-NNIF9gHJ?usp=sharing",
          password: "billing",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1h24Sm5BSx6OzrahFIhH963YR2CH4cW0N?usp=sharing",
          password: "billing",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/19u4EdYXQ_HGXj4934sQOv3WxzjbijpSO?usp=sharing",
          password: "billing",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1mczfss_rnGDtfmMNDLN-cJuQJQ4Vc79I?usp=sharing",
          password: "billing",
        },
        {
          nama: "Uraian Tugas",
          drive: "https://drive.google.com/drive/folders/1ny-nM2SHc39j0JAiFL-E-bQkjWikUKdL?usp=sharing",
          password: "billing",
        },
        {
          nama: "Struktur",
          drive: "https://drive.google.com/drive/folders/1tHbXQ_UsWIo071etRrjIqxiYbThMXdDB?usp=sharing",
          password: "billing",
        },
      ],
    },
    {
      nama: "Kasir",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1xZ1Z71vS25BZ4Xlt7Wj4miOkJPSVMGUe?usp=sharing",
          password: "kasir",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1aplo37Qtuew0yGDab0coecrqT8DIgXpD?usp=drive_link",
          password: "kasir",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1vBxy_Yv2fWz-OU5WKD5-3I_M10kuGc00?usp=drive_link",
          password: "kasir",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1OeBEnqsHARHifXZaTh9dkTQVndSf_SN0?usp=drive_link",
          password: "kasir",
        },
      ],
    },
    {
      nama: "Administrasi Keuangan",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/16GMOAdE3D71vvmD-wVaeOsmAz5CBn8aP?usp=sharing",
          password: "administrasikeuangan",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1B2NHcDnHwxyQmnuBPFkwVlzPSi0IZwA5?usp=sharing",
          password: "administrasikeuangan",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1ALOdedO0UrBKpX96DD1y44A2B3TI4URm?usp=sharing",
          password: "administrasikeuangan",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1VhE-qHNzQVfm2hCye9uZK85xiXJj7v_V?usp=sharing",
          password: "administrasikeuangan",
        },
        {
          nama: "Laporan Keuangan",
          drive: "https://drive.google.com/drive/folders/14TWY8QPBGkfob8073H8JyGhfV4xeiMqs?usp=sharing",
          password: "administrasikeuangan",
        },
        {
          nama: "Uraian Tugas",
          drive: "https://drive.google.com/drive/folders/1aM4pD9ubbQ788ak7ocLpvMqqQFhnqcdT?usp=sharing",
          password: "administrasikeuangan",
        },
        {
          nama: "Struktur",
          drive: "https://drive.google.com/drive/folders/14DbnUCqf_1MnDqI7lvDAECORr0Je-e1M?usp=sharing",
          password: "administrasikeuangan",
        },
      ],
    },
    {
      nama: "Pajak",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1EubtdjWBo83lzVcAkoy8KwjJPjRlrYjS?usp=sharing",
          password: "pajak",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/19OJv0BaGWQkywTIPVLB0BpswLiwNGyeP?usp=sharing",
          password: "pajak",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1w8NasYrnf6URk48wNFHJ9qSYlar47k7y?usp=sharing",
          password: "pajak",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1MhmP2k0Mx_bKplvpvQnIN_0LPi6G5x8r?usp=sharing",
          password: "pajak",
        },
      ],
    },
    {
      nama: "Logistik",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1EubtdjWBo83lzVcAkoy8KwjJPjRlrYjS?usp=sharing",
          password: "logistik",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1ucNR7HxlqNxKH6tHbkJWFiD9-zuHo8p7?usp=sharing",
          password: "logistik",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1Bx96aLQ82drpiDKZWC-0gNJ0T0pqT1wZ?usp=sharing",
          password: "logistik",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/171j2saAakaHGuEF9BMV4Rwi3OYpJuIDg?usp=sharing",
          password: "logistik",
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