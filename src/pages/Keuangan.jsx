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
      ],
    },
    {
      nama: "Pajak",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1EubtdjWBo83lzVcAkoy8KwjJPjRlrYjS?usp=sharing",
          password: "billing",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/19OJv0BaGWQkywTIPVLB0BpswLiwNGyeP?usp=sharing",
          password: "billing",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1w8NasYrnf6URk48wNFHJ9qSYlar47k7y?usp=sharing",
          password: "billing",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1MhmP2k0Mx_bKplvpvQnIN_0LPi6G5x8r?usp=sharing",
          password: "billing",
        },
      ],
    },
    {
      nama: "Logistik",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/14J0ZbloimfEQHUsK0PIzP_pkfoyX2ABi?usp=sharing",
          password: "billing",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1ucNR7HxlqNxKH6tHbkJWFiD9-zuHo8p7?usp=sharing",
          password: "billing",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1Bx96aLQ82drpiDKZWC-0gNJ0T0pqT1wZ?usp=sharing",
          password: "billing",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/171j2saAakaHGuEF9BMV4Rwi3OYpJuIDg?usp=sharing",
          password: "billing",
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