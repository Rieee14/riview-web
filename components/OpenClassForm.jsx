"use client"
import { useState } from "react"

export default function OpenClassForm({ onClose }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl">
        + Buka Kelas Baru
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form className="bg-white rounded-2xl p-8 w-full max-w-lg space-y-4">
            <h2 className="font-semibold text-xl">Buka Kelas Baru</h2>

            <input className="border p-3 w-full rounded-lg" placeholder="Nama Kelas" />
            <select className="border p-3 w-full rounded-lg">
              <option>Jenjang</option>
              <option>SD</option><option>SMP</option><option>SMA</option>
            </select>
            <input className="border p-3 w-full rounded-lg" placeholder="Mata Pelajaran" />
            <input className="border p-3 w-full rounded-lg" placeholder="Jadwal (contoh: Senin 16.00)" />
            <textarea className="border p-3 w-full rounded-lg" placeholder="Deskripsi singkat..." />

            <div className="flex gap-3 pt-4">
              <button type="button" onClick={() => setOpen(false)} className="w-full border py-2 rounded-lg">
                Batal
              </button>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
                Simpan Kelas
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
