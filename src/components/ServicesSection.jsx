function ServicesSection() {
  return (
    <section id="layanan" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-gray-600">
              ORBAKUM DELIK melayani masyarakat dalam berbagai bidang
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* A. Bidang Bantuan Hukum */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    A. Bidang Bantuan Hukum
                  </h3>
                </div>
              </div>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li className="leading-relaxed">
                  Memberikan pendampingan hukum kepada masyarakat yang membutuhkan.
                </li>
                <li className="leading-relaxed">
                  Melakukan edukasi hukum dan advokasi terhadap pelanggaran hak-hak warga negara.
                </li>
                <li className="leading-relaxed">
                  Melakukan koordinasi dengan lembaga penegak hukum sesuai kebutuhan penanganan kasus.
                </li>
              </ol>
            </div>

            {/* B. Bidang Kemanusiaan */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    B. Bidang Kemanusiaan
                  </h3>
                </div>
              </div>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li className="leading-relaxed">
                  Melaksanakan aksi sosial, bantuan darurat, dan respon cepat bencana.
                </li>
                <li className="leading-relaxed">
                  Menjalin kolaborasi dengan lembaga kemanusiaan pemerintah dan non-pemerintah.
                </li>
              </ol>
            </div>

            {/* C. Bidang Sosial */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    C. Bidang Sosial
                  </h3>
                </div>
              </div>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li className="leading-relaxed">
                  Membantu kegiatan sosial masyarakat seperti pembinaan komunitas, pemberdayaan, dan kegiatan kepedulian sosial lainnya.
                </li>
                <li className="leading-relaxed">
                  Melakukan pemetaan kebutuhan sosial masyarakat di wilayah tugasnya.
                </li>
              </ol>
            </div>

            {/* D. Investigasi dan Pemantauan Kinerja Negara */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    D. Investigasi dan Pemantauan Kinerja Negara
                  </h3>
                </div>
              </div>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li className="leading-relaxed">
                  Melaksanakan investigasi, pemantauan, dan pengawasan terhadap:
                  <ul className="mt-2 ml-6 space-y-2 list-disc list-inside text-gray-600">
                    <li>Kinerja lembaga negara (pusat dan daerah);</li>
                    <li>Kebijakan publik dan pelaksanaannya;</li>
                    <li>Pengelolaan dan perlindungan lingkungan hidup;</li>
                    <li>Pelaksanaan fungsi serikat pekerja/serikat buruh;</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700 mb-6">
              Butuh bantuan atau ingin berkonsultasi?
            </p>
            <a
              href="https://wa.me/6281334477994"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
            >
              Hubungi Kami Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
