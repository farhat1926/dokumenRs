import { useState } from "react";


export default function SPO() {
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
          drive: "https://drive.google.com/drive/folders/1We3zDIt7gaove0UYPhQssQRnO41ymbXT?hl=id",
          password: "igd",
        },
        {
          nama: "Instalasi Bedah Sentral (IBS)",
          drive: "https://drive.google.com/drive/folders/1WGZYCsoG6V-TgBJepqNiQRGM0w6er6NJ?hl=id",
          password: "ibs",
        },
        {
          nama: "Instalasi Rawat Jalan (Poliklinik)",
          drive: "https://drive.google.com/drive/folders/1j_ohVyuL9XkT371UEJRYVIQUMXvq9ag1?hl=id",
          password: "poliklinik",
        },
         {
          nama: "Instalasi Rawat Inap",
          drive: "https://drive.google.com/drive/folders/1c09ZldtoEhiVH42BCLWmN2y3yyYWH4zt?hl=id",
          password: "rawatinap",
        },
        {
          nama: "Instalasi Perawatan Intensif (ICU)",
          drive: "https://drive.google.com/drive/folders/1hcFTBI62kupeTAodW1M3Vu1RdUfGm6ZS?hl=id",
          password: "icu",
        },
    ],
    },
      {
      nama: "Penunjang Medis dan Pelayanan Non Medis",
      kategori: [
        {
          nama: "Instalasi Laboratorium",
          drive: "https://drive.google.com/drive/folders/1eMaHHXOz3hfAPP0q6UPlcNRspw1RYxsa?usp=sharing",
          password: "laboratorium",
        },
        {
          nama: "Instalasi Radiologi",
          drive: "https://drive.google.com/drive/folders/1nxakt7awU0GrFnVPJguS-AvEn3DHHNvr?usp=sharing",
          password: "radiologi",
        },
        {
          nama: "Instalasi Farmasi",
          drive: "https://drive.google.com/drive/folders/1dhErefclQlWTsmrN_7Max2Pz0J2jsjZ_?usp=sharing",
          password: "farmasi",
        },
        {
          nama: "Instalasi Gizi",
          drive: "https://drive.google.com/drive/folders/1jPd6Qb4Y3BX3jf8FtHOGtd1PGJnCl4eZ?usp=sharing",
          password: "gizi",
        },
        {
          nama: "Instalasi Rekam Medis",
          drive: "https://drive.google.com/drive/folders/1oWZDgNzNYgdn0yvCYHuIJbIbv0RP-pvr?usp=sharing",
          password: "rekammedis",
        },
        {
          nama: "Instalasi Rehabilitasi Medis",
          drive: "https://drive.google.com/drive/folders/1UYlMvzLNIUxOEOEJ6VhTVO0U74G0xIQc?usp=sharing",
          password: "rehabilitasimedis",
        },
        {
          nama: "Kerohanian",
          drive: "https://drive.google.com/drive/folders/1UVVuV8a6DMZqVWeiZ6os9IIpfQUqYsrh?usp=sharing",
          password: "kerohanian",
        },
        {
          nama: "Pemulasaran Jenazah",
          drive: "https://drive.google.com/drive/folders/1M53Kv4KrfdHVl7WmaD93pcjaNMkwd8LB?usp=sharing",
          password: "pemulasaranjenazah",
        },
        {
          nama: "Humas dan Marketing",
          drive: "https://drive.google.com/drive/folders/10RFgLmpz19cONua4jIQ1GTZ_frLzilfU?usp=sharing",
          password: "humasmarketing",
        },
      ],
    },
      {
      nama: "SDM",
      kategori: [
        {
          nama: "Kesekretariatan",
          drive: "https://drive.google.com/drive/folders/10sNrgqlsxjyKkvInL78Zrb05D2VSTtlF?usp=sharing",
          password: "Kesekretariatan",
        },
        {
          nama: "Kepegawaian",
          drive: "https://drive.google.com/drive/folders/1v766tzjZjIF-O9vjVA86S2fWgk6xxcsG?usp=sharing",
          password: "kepegawaian",
        },
        {
          nama: "Pendidikan dan Penelitian (DIKLAT)",
          drive: "https://drive.google.com/drive/folders/1ou0BrkyW7hrGhFhyvHhRh1bDdeSsrGhR?usp=sharing",
          password: "diklat",
        },
      ],
    },
      {
      nama: "Keperawatan dan Kebidanan",
      kategori: [
         {
          nama: "Keperawatan",
          drive: "https://drive.google.com/drive/folders/1XZA_jwaFvbwgyQgnc2FFZJtSnCIjrjE6?hl=id",
          password: "keperawatan",
        },
        {
          nama: "Kebidanan",
          drive: "https://drive.google.com/drive/folders/1q1lxts9SNGP5YPOK0YlT4itXZ_5jpEob?usp=sharing",
          password: "kebidanan",
        },
      ],
    },
      {
      nama: "Keuangan",
      kategori: [
         {
          nama: "Billing",
          drive: "https://drive.google.com/drive/folders/1vLDvyms-X5jvjKbLpiXG5MC-NNIF9gHJ?usp=sharing",
          password: "billing",
        },
        {
          nama: "Kasir",
          drive: "https://drive.google.com/drive/folders/1xZ1Z71vS25BZ4Xlt7Wj4miOkJPSVMGUe?usp=sharing",
          password: "kasir",
        },
        {
          nama: "Administrasi keuangan",
          drive: "https://drive.google.com/drive/folders/16GMOAdE3D71vvmD-wVaeOsmAz5CBn8aP?usp=sharing",
          password: "administrasikeuangan",
        },
        {
          nama: "Pajak",
          drive: "https://drive.google.com/drive/folders/1EubtdjWBo83lzVcAkoy8KwjJPjRlrYjS?usp=sharing",
          password: "pajak",
        },
        {
          nama: "Logistik",
          drive: "https://drive.google.com/drive/folders/1EubtdjWBo83lzVcAkoy8KwjJPjRlrYjS?usp=sharing",
          password: "logistik",
        },
      ],
    },
     {
      nama: "Sarana dan Prasarana",
      kategori: [
         {
          nama: "IT",
          drive: "https://drive.google.com/drive/folders/1q1lxts9SNGP5YPOK0YlT4itXZ_5jpEob?usp=sharing",
          password: "it",
        },
        {
          nama: "IPSRS",
          drive: "https://drive.google.com/drive/folders/1oOrg4DP9Mts-bAM2q77WfWF2XkXUzPuc?usp=sharing",
          password: "ipsrs",
        },
        {
          nama: "CSSD",
          drive: "https://drive.google.com/drive/folders/1p_lbp3mAV7-MJ00Wr5EdG0npTwS2eFmC?usp=sharing",
          password: "cssd",
        },
        {
          nama: "Linen dan Laundry",
          drive: "https://drive.google.com/drive/folders/1p_lbp3mAV7-MJ00Wr5EdG0npTwS2eFmC?usp=sharing",
          password: "linenlaundry",
        },
        {
          nama: "Sanitasi Lingkungan",
          drive: "https://drive.google.com/drive/folders/17wgnv8sEtO8RSRrfK0g67P7Gmx0A5glU?usp=sharing",
          password: "sanitasilingkungan",
        },
        {
          nama: "Unit Keamanan",
          drive: "https://drive.google.com/drive/folders/1m2qgOGZaEbzT5RRuellFC-K9CVO1KY6x?usp=sharing",
          password: "unitkeamanan",
        },
        {
          nama: "Unit Kebersihan",
          drive: "https://drive.google.com/drive/folders/1aHCyuutan94YPTBLMa57OEkuWEwZajmx?usp=sharing",
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