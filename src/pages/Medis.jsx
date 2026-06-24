import { useState } from "react";


export default function Medis() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedKategori, setSelectedKategori] = useState(null);
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(null); // "kategori" | "password"

  const units = [
    {
      nama: "Instalasi Gawat Darurat (IGD)",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1We3zDIt7gaove0UYPhQssQRnO41ymbXT?hl=id",
          password: "igd",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1We3zDIt7gaove0UYPhQssQRnO41ymbXT?hl=id",
          password: "igd",
        },
        {
          nama: "SPK & RKK",
          drive: "https://drive.google.com/drive/folders/1euohT0NURMSR4nTvPOxHhkuBLenyLCff?usp=sharing",
          password: "igd",
        },
        {
          nama: "SIP & STR",
          drive: "https://drive.google.com/drive/folders/1cf9mj4WM-PNMfdG2QQK-mMv6kclhmvt2?usp=sharing",
          password: "igd",
        },
        {
          nama: "Clinical Pathway",
          drive: "https://drive.google.com/drive/folders/1dYkoTULt1aOYZhqF22mPCP_5OHeLhWcN?usp=sharing",
          password: "igd",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1p7YSkdpjDHVqU76tawQ_6cz-0wW9ZMTH?usp=sharing",
          password: "igd",
        },
        {
          nama: "Panduan Praktek Klinis",
          drive: "https://drive.google.com/drive/folders/1cf3_FFSLUIbTlZ9rXLUqVnB59LcFwMaq?usp=sharing",
          password: "igd",
        },
        {
          nama: "program Kerja",
          drive: "https://drive.google.com/drive/folders/1gj9k2yGsE38LXoI36KqzGllK04cIgvvD?usp=sharing",
          password: "igd",
        },
      ],
    },
    {
      nama: "Instalasi Bedah Sentral (IBS)",
      kategori: [
        {
          nama: "SOP ",
          drive: "https://drive.google.com/drive/folders/1WGZYCsoG6V-TgBJepqNiQRGM0w6er6NJ?hl=id",
          password: "ibs",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1WGZYCsoG6V-TgBJepqNiQRGM0w6er6NJ?hl=id",
          password: "ibs",
        },
        {
          nama: "SPK & RKK",
          drive: "https://drive.google.com/drive/folders/1u7UQ5dvBcLjybNXrkE5T9VPaTLLINGD1?usp=sharing",
          password: "ibs",
        },
        {
          nama: "SIP & STR",
          drive: "https://drive.google.com/drive/folders/16h9eKzmOVXqZRG4VWs_JFs-G6xdyXTFJ?usp=sharing",
          password: "ibs",
        },
         {
          nama: "Clinical Pathway",
          drive: "https://drive.google.com/drive/folders/14JPly9NOEv5qhUJXsG8C9G4hHL0xMAdm?usp=sharing",
          password: "ibs",
        },
         {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1eqitGiVjvDrICGgCrDokffsLN4_dLKaz?usp=sharing",
          password: "ibs",
        },
         {
          nama: "Panduan Praktek Klinis",
          drive: "https://drive.google.com/drive/folders/1484_i9l1LUqz9uIqnkOf7CkjpI64VD0n?usp=sharing",
          password: "ibs",
        },
         {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1421FZTT3BcstOX_ak9wyVDYUjpDwSqa4?usp=sharing",
          password: "ibs",
        },
      ],
    },
    {
      nama: "Instalasi Rawat Jalan (Poliklinik)",
      kategori: [
        {
          nama: "SOP",
          drive: "https://drive.google.com/drive/folders/1j_ohVyuL9XkT371UEJRYVIQUMXvq9ag1?hl=id",
          password: "poliklinik",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1XR7yIhqRT5ZwBeKrm3QHFZlY7ytFZfqd?usp=sharing",
          password: "poliklinik",
        },
        {
          nama: "SPK & RKK",
          drive: "https://drive.google.com/drive/folders/1DYppMjQhU3-PMLvGJ7P4IMwfVqlxaiez?usp=sharing",
          password: "poliklinik",
        },
        {
          nama: "SIP & STR",
          drive: "https://drive.google.com/drive/folders/1nFJV5F0cwAfiIFP_rp8e6P2koDA5qfNy?usp=sharing",
          password: "poliklinik",
        },
        {
          nama: "Clinical Pathway",
          drive: "https://drive.google.com/drive/folders/1B5LOBwCzMfiPvmFc9FFJEwtCqctkvL9m?usp=sharing",
          password: "poliklinik",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1xiotYSu3Mz_womMwuQfoODkSh01Ykn0P?usp=sharing",
          password: "poliklinik",
        },
        {
          nama: "Panduan Praktek Klinis",
          drive: "https://drive.google.com/drive/folders/1jzWROkGlMyyyHO7PjABEUYkW6BRe79GS?usp=sharing",
          password: "poliklinik",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1L7Yw5p2pg2JT6E0rQ4yVGDR-R4Na3N12?usp=sharing",
          password: "poliklinik",
        },
      ],
    },
    {
      nama: "Instalasi Rawat Inap",
      kategori: [
        {
          nama: "SOP",
          drive: "https://drive.google.com/drive/folders/1c09ZldtoEhiVH42BCLWmN2y3yyYWH4zt?hl=id",
          password: "rawatinap",
        },
        {
          nama: "Pedoman",
          drive: "https://drive.google.com/drive/folders/1c09ZldtoEhiVH42BCLWmN2y3yyYWH4zt?hl=id",
          password: "rawatinap",
        },
        {
          nama: "SPK & RKK",
          drive: "https://drive.google.com/drive/folders/1VnQhMWBNeifFPlpRTR2cenpDY1wkFALJ?usp=sharing",
          password: "rawatinap",
        },
        {
          nama: "SIP & STR",
          drive: "https://drive.google.com/drive/folders/1ne9VR3W3gI51c5FEfN2d0dprbyiPOlzB?usp=sharing",
          password: "rawatinap",
        },
        {
          nama: "Clinical Pathway",
          drive: "https://drive.google.com/drive/folders/13R3JWNvrGv0Vj77s3391FvnwuF80dss6?usp=sharing",
          password: "rawatinap",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1lF91iTzhnzdl8f0bh-TIWCssMJXvVnhk?usp=sharing",
          password: "rawatinap",
        },
        {
          nama: "Panduan Praktek Klinis",
          drive: "https://drive.google.com/drive/folders/1wykL5U_C-BUMk0IxdlRDxXO4WPWnkMY5?usp=sharing",
          password: "rawatinap",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1UAINLYOt9yW61q8_ZgC6uaVr_SEsH_jE?usp=sharing",
          password: "rawatinap",
        },
      ],
    },
    {
      nama: "Instalasi Keperawatan Intensif (ICU)",
      kategori: [
        {
          nama: "SOP",
          drive: "https://drive.google.com/drive/folders/1hcFTBI62kupeTAodW1M3Vu1RdUfGm6ZS?hl=id",
          password: "icu",
        },
        {
          nama: "Pedoman",
          drive: "https://drive.google.com/drive/folders/1hcFTBI62kupeTAodW1M3Vu1RdUfGm6ZS?hl=id",
          password: "icu",
        },
        {
          nama: "SPK & RKK",
          drive: "https://drive.google.com/drive/folders/1Jm5JjUNXG-Ko5t-6QV1fsiZYb7vdP7Q7?usp=sharing",
          password: "icu",
        },
        {
          nama: "SIP & STR",
          drive: "https://drive.google.com/drive/folders/11Pq1g8fxjwlFKC2EP9CZCYrz0qjRrtiW?usp=sharing",
          password: "icu",
        },
        {
          nama: "Clinical Pathway",
          drive: "https://drive.google.com/drive/folders/1RneI4klpv7KqtQ9k1fxLmEeJ8KWkw5E4?usp=sharing",
          password: "icu",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1FW18Pdh1WdsADgVFDZnic3A84LPA5z7F?usp=sharing",
          password: "icu",
        },
        {
          nama: "Panduan Praktek Klinis",
          drive: "https://drive.google.com/drive/folders/1kSD0WAgu0FgoAocTv6CZoTMVkzpofWAm?usp=sharing",
          password: "icu",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1EDkhh91PX0d6ZRru6agOrT8GOYft23-z?usp=sharing",
          password: "icu",
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