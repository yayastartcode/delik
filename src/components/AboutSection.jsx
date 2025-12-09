function AboutSection() {
  return (
    <section id="tentang" className="bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-5xl">📜</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Tentang Kami
            </h2>
          </div>

          <div className="space-y-6 text-white text-lg md:text-xl leading-relaxed mb-12">
            <p>
              <span className="font-bold">KABAR DELAPAN LINTANG KEADILAN</span> adalah portal
              berita independen yang berfokus pada isu{" "}
              <span className="font-semibold">
                keadilan sosial, hukum, pemerintahan, dan suara masyarakat
                kecil
              </span>
              .
            </p>

            <p>
              Media ini lahir dari semangat organisasi{" "}
              <span className="italic font-semibold">Delapan Lintang Keadilan</span> untuk
              memperjuangkan transparansi, keadilan, dan kebenaran di tengah
              kehidupan berbangsa dan bernegara.
            </p>

            <p>
              Kami berkomitmen menghadirkan berita{" "}
              <span className="font-bold">
                jujur, akurat, berimbang, dan inspiratif
              </span>
              , serta menjadi jembatan antara rakyat dan penegak hukum.
            </p>
          </div>

          {/* Visi Section */}
          <div className="mb-12 border-l-4 border-red-500 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🎯</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Visi</h3>
            </div>
            <blockquote className="text-white text-lg md:text-xl leading-relaxed italic">
              "Menjadi sumber informasi terpercaya dalam memperjuangkan nilai keadilan, 
              kebenaran, dan kemanusiaan di Indonesia."
            </blockquote>
          </div>

          {/* Misi Section */}
          <div className="border-l-4 border-red-500 pl-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎯</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Misi</h3>
            </div>
            <ol className="space-y-4 text-white text-lg md:text-xl leading-relaxed list-decimal list-inside">
              <li>
                Memberikan informasi aktual terkait isu hukum, sosial, dan keadilan.
              </li>
              <li>
                Menjadi wadah suara rakyat dalam menegakkan nilai kemanusiaan.
              </li>
              <li>
                Mengembangkan literasi hukum dan sosial bagi masyarakat luas.
              </li>
              <li>
                Mendorong transparansi dan akuntabilitas publik.
              </li>
              <li>
                Menyajikan berita yang mendidik dan membangun kesadaran hukum masyarakat.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
