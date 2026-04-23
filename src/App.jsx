import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Klinik from "./pages/Klinik";
import Dokumen from "./pages/Dokumen";
import Jadwal from "./pages/Jadwal";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">

        <Sidebar open={open} setOpen={setOpen} />

        <div className="flex-1 flex flex-col">

          {/* HEADER MOBILE */}
          <div className="bg-white shadow px-4 py-3 flex items-center justify-between md:hidden">
            <button onClick={() => setOpen(true)} className="text-2xl">
              ☰
            </button>
            <h1 className="font-bold">Intranet RS</h1>
          </div>

          {/* CONTENT */}
          <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Klinik" element={<Klinik />} />
              <Route path="/Dokumen" element={<Dokumen />} />
              <Route path="/Jadwal" element={<Jadwal />} />
            </Routes>
          </main>

        </div>
      </div>
    </BrowserRouter>
  );
}