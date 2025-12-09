function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              JASA BANTUAN HUKUM TERPERCAYA
            </h1>

            <div className="text-3xl font-semibold text-yellow-300">
              Banyak Klien Terlayani !
            </div>

            <div className="space-y-4 text-lg">
              <p className="font-medium">
                Organisasi Bantuan Hukum Delapan Lintang Keadilan
              </p>
              <p className="font-bold text-xl">"ORBAKUM DELIK"</p>
              <p className="leading-relaxed">Bergerak di Bidang:</p>
              <ul className="space-y-2 text-yellow-100">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>
                    <strong>BANTUAN HUKUM</strong> - Konsultasi dan Pendampingan
                    Legal
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>
                    <strong>KEMASYARAKATAN</strong> - Pemberdayaan Masyarakat
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>
                    <strong>SOSIAL</strong> - Kegiatan Sosial dan Kemanusiaan
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>
                    <strong>INVESTIGASI</strong> - Penelitian dan Pengumpulan
                    Fakta
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/62882005371570"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
              >
                Hubungi Kami Sekarang
              </a>
            </div>
          </div>

          <div className="w-full">
            <div className="relative w-full">
              <img
                src="/images/hros.jpg"
                alt="ORBAKUM DELIK - Bantuan Hukum"
                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
