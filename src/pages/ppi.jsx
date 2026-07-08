import { useState } from "react";


export default function ppi() {
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
          drive: "https://drive.google.com/drive/folders/1OCtNr5TBCr3LSTwILslqWnthv8I0ZN-_?usp=drive_link",
          password: "ibs",
        },
        {
          nama: "Instalasi Rawat Jalan (Poliklinik)",
          drive: "https://drive.google.com/drive/folders/1XR7yIhqRT5ZwBeKrm3QHFZlY7ytFZfqd?usp=drive_link",
          password: "poliklinik",
        },
        {
          nama: "Instalasi Rawat Inap",
          drive: "https://drive.google.com/drive/folders/15brWmixTj9lPjr8FMcO9D0A3tg0s5hot?usp=drive_link",
          password: "rawatinap",
        },
        {
          nama: "Instalasi Keperawatan Intensif (ICU)",
          drive: "https://drive.google.com/drive/folders/1LHGwpnEVi0I4OzeDHlQMh6-FGEo07VGf?usp=drive_link",
          password: "icu",
        },
    ],
    },
      {
      nama: "Penunjang Medis dan Pelayanan Non Medis",
      kategori: [
        {
          nama: "Instalasi Laboratorium",
          drive: "https://drive.google.com/drive/folders/1OxPMr2zQ0sqHeedeoDT_MHdFYbVjgmmQ?usp=sharing",
          password: "laboratorium",
        },
        {
          nama: "Instalasi Radiologi",
          drive: "https://drive.google.com/drive/folders/1TOieJYeghTslE4Ig9cWj3bjWjhVNpIxv?usp=sharing",
          password: "radiologi",
        },
        {
          nama: "Instalasi Farmasi",
          drive: "https://drive.google.com/drive/folders/1bNnH66zrqt1YQ0lFPaowKIBDTUvfxsuM?usp=sharing",
          password: "farmasi",
        },
        {
          nama: "Instalasi Gizi",
          drive: "https://drive.google.com/drive/folders/1gk8Uqxiz2tswrzzMI3E9qAqJdkrd2Qcu?usp=sharing",
          password: "gizi",
        },
        {
          nama: "Instalasi Rekam Medis",
          drive: "https://drive.google.com/drive/folders/1Bv8pBj3-NUhwgxEtoO1ZsO3FpB-OUMuT?usp=sharing",
          password: "rekammedis",
        },
        {
          nama: "Instalasi Rehabilitasi Medis",
          drive: "https://drive.google.com/drive/folders/1hnF6lJmddFhvfqaxafYiSDtOuu_Y7sNX?usp=sharing",
          password: "rehabilitasimedis",
        },
        {
          nama: "Kerohanian",
          drive: "https://drive.google.com/drive/folders/1OzQLdBW9_kk47T5uOoA9F5YhA9ma5ECO?usp=sharing",
          password: "kerohanian",
        },
        {
          nama: "Pemulasaran Jenazah",
          drive: "https://drive.google.com/drive/folders/1CpsewmjoaYQEvVu-Xw7k1Rq643NZTLyk?usp=sharing",
          password: "pemulasaranjenazah",
        },
        {
          nama: "Humas dan Marketing",
          drive: "https://drive.google.com/drive/folders/1lIF-GriQ5uRqxFdGVakaZuOQ__R8N_V8?usp=sharing",
          password: "humasmarketing",
        },
      ],
    },
      {
      nama: "SDM",
      kategori: [
        {
          nama: "Kesekretariatan",
          drive: "https://drive.google.com/drive/folders/15Z1NHvzR8ItNpqCYD7Rn0DQRHpjKKS2z?usp=sharing",
          password: "sekertaris",
        },
        {
          nama: "Kepegawaian",
          drive: "https://drive.google.com/drive/folders/1bPpdZauKixTHzOKb8J3MGEIKsXdSxF9l?usp=sharing",
          password: "kepegawaian",
        },
        {
          nama: "Pendidikan dan Pelatihan (DIKLAT)",
          drive: "https://drive.google.com/drive/folders/1FjLqss2RTlHlG-LH-nEFV4h8EN-Ualku?usp=sharing",
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
          drive: "https://drive.google.com/drive/folders/1h24Sm5BSx6OzrahFIhH963YR2CH4cW0N?usp=sharing",
          password: "billing",
        },
        {
          nama: "Kasir",
          drive: "https://drive.google.com/drive/folders/1aplo37Qtuew0yGDab0coecrqT8DIgXpD?usp=drive_link",
          password: "kasir",
        },
        {
          nama: "Administrasi Keuangan",
          drive: "https://drive.google.com/drive/folders/1B2NHcDnHwxyQmnuBPFkwVlzPSi0IZwA5?usp=sharing",
          password: "administrasikeuangan",
        },
        {
          nama: "Pajak",
          drive: "https://drive.google.com/drive/folders/19OJv0BaGWQkywTIPVLB0BpswLiwNGyeP?usp=sharing",
          password: "pajak",
        },
        {
          nama: "Logistik",
          drive: "https://drive.google.com/drive/folders/1ucNR7HxlqNxKH6tHbkJWFiD9-zuHo8p7?usp=sharing",
          password: "logistik",
        },
      ],
    },
     {
      nama: "Sarana dan Prasarana",
      kategori: [
         {
          nama: "IT",
          drive: "https://drive.google.com/drive/folders/1ogDRyMcgrxGwkdivgRexNdvjeRf4PyQr?usp=sharing",
          password: "it",
        },
        {
          nama: "IPSRS",
          drive: "https://drive.google.com/drive/folders/1S44CnTeFuB7bTS-AmAHoylrmxfgZpTvb?usp=sharing",
          password: "ipsrs",
        },
        {
          nama: "CSSD",
          drive: "https://drive.google.com/drive/folders/1txa4iz63umf2m9QZdK3I--2u7UNM9M9w?usp=sharing",
          password: "cssd",
        },
        {
          nama: "Linen dan Laundry",
          drive: "https://drive.google.com/drive/folders/1PAALtZHt2eQ6zIWALj2G6XEenVnEIyJe?usp=sharing",
          password: "linenlaundry",
        },
        {
          nama: "Sanitasi Lingkungan",
          drive: "https://drive.google.com/drive/folders/1yU9Fm1_pCIXMKlKmy3Bc4qOMzyLKvS8U?usp=sharing",
          password: "sanitasilingkungan",
        },
        {
          nama: "Unit Keamanan",
          drive: "https://drive.google.com/drive/folders/1tl6l2eoPrGI5cSl1oJijjtbqDhm27FbT?usp=sharing",
          password: "unitkeamanan",
        },
        {
          nama: "Unit Kebersihan",
          drive: "https://drive.google.com/drive/folders/1G89noQfIgJWlYT7a3TaEsHMJuABo3J5_?usp=sharing",
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