import Link from "next/link"

export default function ClassCard({title, level, subject, time}) {
  return (
    <div className="border border-slate-200 bg-white rounded-2xl p-6 hover:bg-slate-50 transition">
      <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-500">Jenjang: {level}</p>
      <p className="text-sm text-slate-500">Mapel: {subject}</p>
      <p className="text-sm text-slate-500 mb-4">Jadwal: {time}</p>
      <Link href="/kelas/detail" className="text-indigo-600 hover:underline">Lihat Detail</Link>
    </div>
  )
}
