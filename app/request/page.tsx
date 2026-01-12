import Navbar from "@/components/Navbar"

export default function Request() {
  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto py-20 px-4">
        <h1 className="text-2xl font-bold mb-6">Ajukan Kebutuhan Belajar</h1>
        <input className="border border-slate-300 rounded-lg p-3 w-full mb-4" placeholder="Jenjang" />
        <input className="border border-slate-300 rounded-lg p-3 w-full mb-4" placeholder="Mata Pelajaran" />
        <textarea className="border border-slate-300 rounded-lg p-3 w-full mb-4" placeholder="Kesulitan belajar..." />
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-3 rounded-xl">
          Kirim Request
        </button>
      </div>
    </>
  )
}
