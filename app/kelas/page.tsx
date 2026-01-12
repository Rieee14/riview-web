import Navbar from "@/components/Navbar"
import ClassCard from "@/components/ClassCard"

const classes = [
  { title: "Matematika SMP", level: "SMP", subject: "Matematika", time: "Senin 16.00" },
  { title: "Fisika SMA", level: "SMA", subject: "Fisika", time: "Rabu 18.00" },
]

export default function Kelas() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold mb-8 text-slate-800">Katalog Kelas</h1>
{/* REQUEST CTA */}
<div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
  <div>
    <h3 className="font-semibold text-slate-800 mb-1">
      Tidak menemukan kelas yang kamu butuhkan?
    </h3>
    <p className="text-slate-600 text-sm">
      Ajukan kebutuhan belajarmu dan kami akan carikan volunteer yang sesuai.
    </p>
  </div>
  <a
    href="/request"
    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition whitespace-nowrap">
    + Request Kelas
  </a>
</div> 
        {/* FILTER */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <select className="border border-slate-300 p-3 rounded-lg">
            <option>Semua Jenjang</option>
            <option>SD</option><option>SMP</option><option>SMA</option>
          </select>
          <select className="border border-slate-300 p-3 rounded-lg">
            <option>Semua Mapel</option>
            <option>Matematika</option><option>Fisika</option>
          </select>
          <select className="border border-slate-300 p-3 rounded-lg">
            <option>Semua Jenis</option>
            <option>Reguler</option><option>Intensif</option>
          </select>
        </div>

        {/* LIST */}
        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((c, i) => <ClassCard key={i} {...c} />)}
        </div>
      </div>
    </>
  )
}
