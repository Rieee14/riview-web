import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* 1. HERO */}
      <section className="bg-indigo-50 py-32 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Belajar Gratis untuk Masa Depan Lebih Setara
        </h1>
        <p className="max-w-xl mx-auto text-slate-600 mb-10">
          Platform sociopreneur pendidikan yang menghubungkan siswa dengan volunteer pengajar profesional.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/kelas" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
            Saya Siswa
          </a>
          <a href="/volunteer" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-xl hover:bg-slate-50 transition">
            Saya Volunteer
          </a>
        </div>
      </section>

      {/* 2. MASALAH */}
      <section className="max-w-6xl mx-auto py-24 px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Masalah Akses Pendidikan</h2>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Banyak siswa di Indonesia masih kesulitan mengakses bimbingan belajar berkualitas karena keterbatasan ekonomi dan lokasi.
          Platform ini hadir sebagai solusi pembelajaran gratis dan inklusif.
        </p>
      </section>

      {/* 3. CARA KERJA */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-4 text-center">
          {["Daftar", "Pilih / Buka Kelas", "Belajar Gratis"].map((step, i) => (
            <div key={i} className="bg-white border border-slate-200 p-8 rounded-2xl">
              <h3 className="font-semibold text-lg text-slate-800 mb-2">{step}</h3>
              <p className="text-slate-500">Proses mudah dan transparan.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PERAN */}
      <section className="max-w-7xl mx-auto py-24 grid md:grid-cols-2 gap-12 px-4">
        <div className="border border-slate-200 p-10 rounded-2xl">
          <h3 className="font-semibold text-xl mb-4 text-slate-800">Untuk Siswa</h3>
          <p className="text-slate-500 mb-6">Akses kelas gratis sesuai kebutuhan belajarmu.</p>
          <a href="/kelas" className="text-indigo-600 font-medium hover:underline">Lihat Katalog Kelas →</a>
        </div>
        <div className="border border-slate-200 p-10 rounded-2xl">
          <h3 className="font-semibold text-xl mb-4 text-slate-800">Untuk Volunteer</h3>
          <p className="text-slate-500 mb-6">Bagikan ilmu dan ciptakan dampak sosial nyata.</p>
          <a href="/volunteer" className="text-emerald-600 font-medium hover:underline">Info Volunteer →</a>
        </div>
      </section>

      {/* 5. DAMPAK */}
      <section className="bg-indigo-600 text-white py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 text-center gap-10 px-4">
          <div>
            <h3 className="text-4xl font-bold">1.200+</h3>
            <p className="opacity-80">Siswa Terbantu</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">80+</h3>
            <p className="opacity-80">Volunteer Aktif</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">150+</h3>
            <p className="opacity-80">Kelas Tersedia</p>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONI */}
      <section className="max-w-7xl mx-auto py-24 grid md:grid-cols-3 gap-10 px-4">
        {[
          "Sekarang saya lebih paham matematika dan tidak takut ujian.",
          "Mengajar di sini membuat saya merasa ilmunya benar-benar bermanfaat.",
          "Belajar gratis tapi kualitasnya luar biasa."
        ].map((t, i) => (
          <div key={i} className="border border-slate-200 rounded-2xl p-6 bg-white">
            <p className="text-slate-600">“{t}”</p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  )
}
