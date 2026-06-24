import { useState } from "react";


export default function Penunjang() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedKategori, setSelectedKategori] = useState(null);
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(null); // "kategori" | "password"

  const units = [
      {
      nama: "Laboratorium",
      kategori: [
        {
          nama: "SOP",
          drive: "https://drive.google.com/drive/folders/1eMaHHXOz3hfAPP0q6UPlcNRspw1RYxsa?usp=sharing",
          password: "laboratorium",
        },
        {
          nama: "Pedoman  dan Panduan",
          drive: "https://drive.google.com/drive/folders/1OxPMr2zQ0sqHeedeoDT_MHdFYbVjgmmQ?usp=sharing",
          password: "laboratorium",
        },
        {
          nama: "SPK & RKK",
          drive: "https://drive.google.com/drive/folders/1lhJ2LU1VJ0TElZcCMTw9BsEUbDRHm4v5?usp=sharing",
          password: "laboratorium",
        },
        {
          nama: "SIP & STR",
          drive: "https://drive.google.com/drive/folders/1rNfFRwBDN8xJBiYFf8gzmZMYfUEViO3x?usp=sharing",
          password: "laboratorium",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1wMC5Pxrn622CLra0Auh0JXZgtpBF9a4R?usp=sharing",
          password: "laboratorium",
        },
        {
          nama: "Indikator Mutu",
          drive: "https://drive.google.com/drive/folders/1cmBJknlt9M4MJquZaIsCbv3EDT9r4KAo?usp=sharing",
          password: "laboratorium",
        },
      ],
    },
      {
      nama: "Radiologi",
      kategori: [
        {
          nama: "SOP",
          drive: "https://drive.google.com/drive/folders/1nxakt7awU0GrFnVPJguS-AvEn3DHHNvr?usp=sharing",
          password: "radiologi",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1TOieJYeghTslE4Ig9cWj3bjWjhVNpIxv?usp=sharing",
          password: "radiologi",
        },
        {
          nama: "SPK & RKK",
          drive: "https://drive.google.com/drive/folders/1XxFtOgxvc7g45Ic3VABvGMi6qpeGXvjl?usp=sharing",
          password: "radiologi",
        },
        {
          nama: "SIP & STR",
          drive: "https://drive.google.com/drive/folders/1WWpDQ3gikNn4ZRPgVg81FOCclPyr46oD?usp=sharing",
          password: "radiologi",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1kRBWg7Uu6N7rsRSm0pVcesLj2YArj2tC?usp=sharing",
          password: "radiologi",
        },
        // {
        //   nama: "Panduan Praktek Klinis",
        //   drive: "https://drive.google.com/drive/folders/1PcWNPoHGD-Fgt9m1SaEvDOFE7qMEYyb5?usp=sharing",
        //   password: "radiologi",
        // },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/17I_Bt-LWZT8VveUtfRqyS-WSQ0fFD9_2?usp=sharing",
          password: "radiologi",
        },

      ],
    },
      {
      nama: "Farmasi",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1dhErefclQlWTsmrN_7Max2Pz0J2jsjZ_?usp=sharing",
          password: "farmasi",
        },
        {
          nama: "SPK & RKK ",
          drive: "https://drive.google.com/drive/folders/1HnL5nnYGaT2_IXCDKy_atBUyn1985UmH?usp=sharing",
          password: "farmasi",
        },
        {
          nama: "Pedoman",
          drive: "https://drive.google.com/drive/folders/1bNnH66zrqt1YQ0lFPaowKIBDTUvfxsuM?usp=sharing",
          password: "farmasi",
        },
        {
          nama: "SIP & STR",
          drive: "https://drive.google.com/drive/folders/1ZCYGkW2IN-fLLzRS8pe_fGJ5bZd1wlVb?usp=sharing",
          password: "farmasi",
        },
        {
          nama: "Mutu unit",
          drive: "https://drive.google.com/drive/folders/100yskin4Ue-zfJf0Q6Ba3FlJB9TJND0C?usp=sharing",
          password: "farmasi",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1ADDYgP2zZwvWPcLBnW_3tBYsF4hGDkoM?usp=sharing",
          password: "farmasi",
        },
        
      ],
    },
      {
      nama: "GIZI",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1jPd6Qb4Y3BX3jf8FtHOGtd1PGJnCl4eZ?usp=sharing",
          password: "gizi",
        },
        {
          nama: "SPK & RKK ",
          drive: "https://drive.google.com/drive/folders/1wxnmygmX-9pogW5s8bDWruSbrb-NaZPf?usp=sharing",
          password: "gizi",
        },
        {
          nama: "Pedoman dan Pelayanan",
          drive: "https://drive.google.com/drive/folders/1gk8Uqxiz2tswrzzMI3E9qAqJdkrd2Qcu?usp=sharing",
          password: "gizi",
        },
        {
          nama: "SIP & STR",
          drive: "https://drive.google.com/drive/folders/1rZpVX7qyG2gAMYGuMdCBECNcVaYmvjaI?usp=sharing",
          password: "gizi",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1HdPfMIEI6QVQRTI3yZKCfmzYVCtggFDB?usp=sharing",
          password: "gizi",
        },
        
      ],
    },
      {
      nama: "Rekam Medis",
      kategori: [
        {
          nama: "SOP",
          drive: "https://drive.google.com/drive/folders/1oWZDgNzNYgdn0yvCYHuIJbIbv0RP-pvr?usp=sharing",
          password: "rekammedis",
        },
        {
          nama: "Pedoman  ",
          drive: "https://drive.google.com/drive/folders/1Bv8pBj3-NUhwgxEtoO1ZsO3FpB-OUMuT?usp=sharing",
          password: "rekammedis",
        },
        {
          nama: "SPK & RKK",
          drive: "https://drive.google.com/drive/folders/1z_nazQPfJkGW2c4369SHMlNgpOJEghE_?usp=sharing",
          password: "rekammedis",
        },
        {
          nama: "SIP & STR",
          drive: "https://drive.google.com/drive/folders/1nyEy3XxoOt1wIg6GAj6LSbIrESBmBMn6?usp=sharing",
          password: "rekammedis",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1YJxT3nB30tkDdkyn-SdscLRz5XEbyYwM?usp=sharing",
          password: "rekammedis",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1oViA73YZZL8B4E5fYKahkgwjNYYGgq6F?usp=sharing",
          password: "rekammedis",
        },
      ],
    },
     {
      nama: "Rehabilitasi Medis",
      kategori: [
        {
          nama: "SOP",
          drive: "https://drive.google.com/drive/folders/1UYlMvzLNIUxOEOEJ6VhTVO0U74G0xIQc?usp=sharing",
          password: "rehabilitasimedis",
        },
        {
          nama: "Pedoman  ",
          drive: "https://drive.google.com/drive/folders/1hnF6lJmddFhvfqaxafYiSDtOuu_Y7sNX?usp=sharing",
          password: "rehabilitasimedis",
        },
        {
          nama: "SPK & RKK",
          drive: "https://drive.google.com/drive/folders/1zMnKMhP1V46TIxtdtB3RXWNb2W9LEehG?usp=sharing",
          password: "rehabilitasimedis",
        },
        {
          nama: "SIP & STR",
          drive: "https://drive.google.com/drive/folders/1gG6W744ppcURDIwTFYH9l8yJ1hL3O3yP?usp=sharing",
          password: "rehabilitasimedis",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1FW3HVoW2k9d72hdN3vKPRxtLrtgJexWy?usp=sharing",
          password: "rehabilitasimedis",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1Z4zwPfdiY2CRXN4qS6YeZtjtZCD2CKto?usp=sharing",
          password: "rehabilitasimedis",
        },
      ],
    },
      {
      nama: "Kerohanian",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1UVVuV8a6DMZqVWeiZ6os9IIpfQUqYsrh?usp=sharing",
          password: "kerohanian",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1OzQLdBW9_kk47T5uOoA9F5YhA9ma5ECO?usp=sharing",
          password: "kerohanian",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/18UMuqIVIyydY92XNVCVNCCLYRLadOx7X?usp=sharing",
          password: "kerohanian",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1dptJQTROURchgnT2bKvikiEm63p4fSRh?usp=sharing",
          password: "kerohanian",
        },
      ],
    },
      {
      nama: "Pemulasaran Jenazah",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/1M53Kv4KrfdHVl7WmaD93pcjaNMkwd8LB?usp=sharing",
          password: "pemulasaranjenazah",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1CpsewmjoaYQEvVu-Xw7k1Rq643NZTLyk?usp=sharing",
          password: "pemulasaranjenazah",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/13xrbZhF9YP4S0WVLgd1GQmBfgS-QHTuT?usp=sharing",
          password: "pemulasaranjenazah",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/1uMhhJJBtTZ5K0kIfinbIsTu-09qCOH5O?usp=sharing",
          password: "pemulasaranjenazah",
        },
      ],
    },
    {
      nama: "Humas & Marketing",
      kategori: [
        {
          nama: "SPO",
          drive: "https://drive.google.com/drive/folders/10RFgLmpz19cONua4jIQ1GTZ_frLzilfU?usp=sharing",
          password: "humasmarketing",
        },
        {
          nama: "Pedoman dan Panduan",
          drive: "https://drive.google.com/drive/folders/1lIF-GriQ5uRqxFdGVakaZuOQ__R8N_V8?usp=sharing",
          password: "humasmarketing",
        },
        {
          nama: "Mutu Unit",
          drive: "https://drive.google.com/drive/folders/1BtflgtRSMxU6FSaYn2RW87GixlumhPCO?usp=sharing",
          password: "humasmarketing",
        },
        {
          nama: "Program Kerja",
          drive: "https://drive.google.com/drive/folders/12F1cf--8CcmN2kRobeA27xIOrrFPCVJE?usp=sharing",
          password: "humasmarketing",
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