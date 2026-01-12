"use client"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"

export default function DaftarVolunteer() {
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto py-20 px-4">
        <h1 className="text-2xl font-bold mb-6">Form Pendaftaran Volunteer</h1>

        <input required className="border border-slate-300 p-3 w-full mb-4 rounded-lg" placeholder="Nama Lengkap" />
        <input required className="border border-slate-300 p-3 w-full mb-4 rounded-lg" placeholder="Email" />
        <input required className="border border-slate-300 p-3 w-full mb-4 rounded-lg" placeholder="Bidang Keahlian" />

        <button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full py-3 rounded-xl">
          Daftar & Masuk Dashboard
        </button>
      </form>
    </>
  )
}
