import { useState } from "react";


export default function Mutu() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedKategori, setSelectedKategori] = useState(null);
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(null); // "kategori" | "password"

  const units = [
      {
      nama: "Pelayanan Medis",
      kategori: [
        {
          nama: "Instalasi Gawat Darurat (IGD)",
          drive: "https://drive.google.com/drive/folders/1p7YSkdpjDHVqU76tawQ_6cz-0wW9ZMTH?usp=sharing",
          password: "igd",
        },
        {
          nama: "Instalasi Bedah Sentral (IBS)",
          drive: "https://drive.google.com/drive/folders/1eqitGiVjvDrICGgCrDokffsLN4_dLKaz?usp=sharing",
          password: "ibs",
        },
        {
          nama: "Instalasi Rawat jalan (Poliklinik)",
          drive: "https://drive.google.com/drive/folders/1xiotYSu3Mz_womMwuQfoODkSh01Ykn0P?usp=sharing",
          password: "poliklinik",
        },
         {
          nama: "Instalasi Rawat Inap (RI)",
          drive: "https://drive.google.com/drive/folders/1lF91iTzhnzdl8f0bh-TIWCssMJXvVnhk?usp=sharing",
          password: "rawatinap",
        },
        {
          nama: "instalasi Keperawatan Intensif (ICU)",
          drive: "https://drive.google.com/drive/folders/1FW18Pdh1WdsADgVFDZnic3A84LPA5z7F?usp=sharing",
          password: "icu",
        },
    ],
    },
      {
      nama: "Penunjang Medis dan Pelayanan Non Medis",
      kategori: [
        {
          nama: "instalasi Laboratorium",
          drive: "https://drive.google.com/drive/folders/1cmBJknlt9M4MJquZaIsCbv3EDT9r4KAo?usp=sharing",
          password: "laboratorium",
        },
        {
          nama: "Instalasi Radiologi",
          drive: "https://drive.google.com/drive/folders/1kRBWg7Uu6N7rsRSm0pVcesLj2YArj2tC?usp=sharing",
          password: "radiologi",
        },
        {
          nama: "Instalasi Farmasi",
          drive: "https://drive.google.com/drive/folders/100yskin4Ue-zfJf0Q6Ba3FlJB9TJND0C?usp=sharing",
          password: "farmasi",
        },
        {
          nama: "Instalasi Gizi",
          drive: "https://drive.google.com/drive/folders/15-Q_-BYe8cIRD8Q3za4oK8wzO3AREk-d?usp=sharing",
          password: "gizi",
        },
        {
          nama: "Instalasi Rekam Medis",
          drive: "https://drive.google.com/drive/folders/1YJxT3nB30tkDdkyn-SdscLRz5XEbyYwM?usp=sharing",
          password: "rekammedis",
        },
        {
          nama: "Instalasi Rehabilitasi Medik",
          drive: "https://drive.google.com/drive/folders/1FW3HVoW2k9d72hdN3vKPRxtLrtgJexWy?usp=sharing",
          password: "rehabilitasimedis",
        },
        {
          nama: "Kerohanian",
          drive: "https://drive.google.com/drive/folders/18UMuqIVIyydY92XNVCVNCCLYRLadOx7X?usp=sharing",
          password: "kerohanian",
        },
        {
          nama: "Pemulasaran Jenazah",
          drive: "https://drive.google.com/drive/folders/13xrbZhF9YP4S0WVLgd1GQmBfgS-QHTuT?usp=sharing",
          password: "pemulasaranjenazah",
        },
        {
          nama: "Humas dan Marketing",
          drive: "https://drive.google.com/drive/folders/1BtflgtRSMxU6FSaYn2RW87GixlumhPCO?usp=sharing",
          password: "humasmarketing",
        },
      ],
    },
      {
      nama: "SDM",
      kategori: [
        {
          nama: "Kesekretariatan",
          drive: "https://drive.google.com/drive/folders/1ej0pJFqzhI8LHx1a9SaCqe-js6UpRJUS?usp=sharing",
          password: "sekertaris",
        },
        {
          nama: "Kepegawaian",
          drive: "https://drive.google.com/drive/folders/1rOF9e8GdmI7jdc5jo9SLi-6I2Cgzcl1-?usp=sharing",
          password: "kepegawaian",
        },
        {
          nama: "Pendidikan dan Pelatihan (DIKLAT)",
          drive: "https://drive.google.com/drive/folders/1lm36CPU1dqrR63IEoM0c76OOORNmzrYV?usp=sharing",
          password: "diklat",
        },
      ],
    },
      {
      nama: "Keperawatan dan Kebidanan",
      kategori: [
         {
          nama: "Keperawatan",
          drive: "https://drive.google.com/drive/folders/1AS-qQsARlhzbxgri5C5lpmKnvVAGLjRi?usp=sharing",
          password: "keperawatan",
        },
        {
          nama: "Kebidanan",
          drive: "https://drive.google.com/drive/folders/1yK4jAHtFlQpBxcBvr5oKF08u1y8q5FKi?usp=sharing",
          password: "kebidanan",
        },
      ],
    },
      {
      nama: "Keuangan",
      kategori: [
        {
          nama: "Billing",
          drive: "https://drive.google.com/drive/folders/19u4EdYXQ_HGXj4934sQOv3WxzjbijpSO?usp=sharing",
          password: "billing",
        },
        {
          nama: "Kasir",
          drive: "https://drive.google.com/drive/folders/1vBxy_Yv2fWz-OU5WKD5-3I_M10kuGc00?usp=drive_link",
          password: "kasir",
        },
        {
          nama: "Administrasi Keuangan",
          drive: "https://drive.google.com/drive/folders/1ALOdedO0UrBKpX96DD1y44A2B3TI4URm?usp=sharing",
          password: "administrasikeuangan",
        },
        {
          nama: "Pajak",
          drive: "https://drive.google.com/drive/folders/1w8NasYrnf6URk48wNFHJ9qSYlar47k7y?usp=sharing",
          password: "pajak",
        },
        {
          nama: "Logistik",
          drive: "https://drive.google.com/drive/folders/1Bx96aLQ82drpiDKZWC-0gNJ0T0pqT1wZ?usp=sharing",
          password: "logistik",
        },
      ],
    },
     {
      nama: "Sarana dan Prasarana",
      kategori: [
        {
          nama: "IPSRS",
          drive: "https://drive.google.com/drive/folders/1n-SU2WMyNPhZRWL4AeFLWy2lFNY7CpOG?usp=sharing",
          password: "ipsrs",
        },
        {
          nama: "CSSD",
          drive: "https://drive.google.com/drive/folders/1XCjUCLbswJtarTVyU3PVkZ5CeLHQSsym?usp=sharing",
          password: "cssd",
        },
        {
          nama: "IT",
          drive: "https://drive.google.com/drive/folders/13A-0wqt1oW11Xh2I_txebMwW3b7n6SHZ?usp=sharing",
          password: "it",
        },
        {
          nama: "Linen dan Laundry",
          drive: "https://drive.google.com/drive/folders/1MNfs06GE6FB3yP5Gblf26oycw5F90L10?usp=sharing",
          password: "linenlaundry",
        },
        {
          nama: "Sanitasi Lingkungan",
          drive: "https://drive.google.com/drive/folders/1KQVfFmhEr2frT4LZIZDUGUHwDXMPTKxG?usp=sharing",
          password: "sanitasilingkungan",
        },
        {
          nama: "Unit Keamanan",
          drive: "https://drive.google.com/drive/folders/1ChyVveF3bKhldcOijcH8G4KfKjLEN72_?usp=sharing",
          password: "unitkeamanan",
        },
        {
          nama: "Unit Kebersihan",
          drive: "https://drive.google.com/drive/folders/1MMXbFIfn217S0MqiChavAdKawfCCndNM?usp=sharing",
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