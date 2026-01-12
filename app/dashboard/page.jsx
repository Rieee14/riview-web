import Navbar from "@/components/Navbar"
import OpenClassForm from "@/components/OpenClassForm"


export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-20 px-4 space-y-10">

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-xl">👨‍🏫 Kelas Diajar: 2</div>
          <div className="border p-6 rounded-xl">📥 Request Masuk: 5</div>
          <div className="border p-6 rounded-xl">⭐ Rating: 4.9</div>
        </div>

        <div>
          <h2 className="font-semibold mb-4">Request Siswa</h2>
          <div className="border p-4 rounded-xl mb-3">Matematika SMP – Aljabar</div>
          <div className="border p-4 rounded-xl">Fisika SMA – Gerak Lurus</div>
        </div>

        <div>
          <h2 className="font-semibold mb-4">Kelas yang Diajar</h2>
          <div className="border p-4 rounded-xl mb-3">Matematika SMP</div>
        </div>

        <OpenClassForm />
      </div>
    </>
  )
}
