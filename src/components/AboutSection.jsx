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
              <span className="font-bold">
                Organisasi Bantuan Hukum Delapan Lintang Keadilan (ORBAKUM
                DELIK)
              </span>{" "}
              adalah organisasi yang bergerak dalam bidang{" "}
              <span className="font-semibold">
                bantuan hukum, kemanusiaan, sosial, dan investigasi
              </span>
              .
            </p>

            <p>
              Kami lahir dari semangat untuk{" "}
              <span className="italic font-semibold">
                memperjuangkan keadilan, kebenaran, dan kemanusiaan
              </span>{" "}
              di tengah kehidupan berbangsa dan bernegara, dengan fokus pada{" "}
              <span className="font-semibold">
                keberpihakan kepada masyarakat yang lemah dan tertindas
              </span>
              .
            </p>

            <p>
              Dengan pengalaman melayani{" "}
              <span className="font-bold">Banyak klien</span>, kami berkomitmen
              menjadi wadah perjuangan rakyat dalam menegakkan hukum yang
              berkeadilan dan memperkuat kepedulian sosial di Indonesia.
            </p>
          </div>

          {/* Visi Section */}
          <div className="mb-12 border-l-4 border-yellow-400 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🎯</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Visi
              </h3>
            </div>
            <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-4">
              <span className="font-semibold">
                Mewujudkan masyarakat yang adil, sadar hukum, dan berkeadaban
                melalui gerakan kemanusiaan, sosial, dan kebangsaan yang
                berlandaskan nilai-nilai kebenaran, kejujuran, serta keadilan.
              </span>
            </blockquote>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed italic">
              Visi ini menggambarkan cita-cita besar Delapan Lintang Keadilan
              untuk menjadi wadah perjuangan rakyat dalam menegakkan hukum yang
              berkeadilan, memperkuat kepedulian sosial, serta membangun
              karakter bangsa yang bermartabat dan bersatu.
            </p>
          </div>

          {/* Misi Section */}
          <div className="border-l-4 border-yellow-400 pl-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎯</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Misi
              </h3>
            </div>
            <ol className="space-y-4 text-white text-base md:text-lg leading-relaxed list-decimal list-outside ml-5">
              <li>
                Menegakkan supremasi hukum yang berkeadilan dengan mengedepankan
                nilai kemanusiaan, kejujuran, dan keberpihakan kepada masyarakat
                yang lemah dan tertindas.
              </li>
              <li>
                Menumbuhkan kesadaran hukum di tengah masyarakat agar tercipta
                kehidupan sosial yang tertib, damai, dan saling menghormati hak
                serta kewajiban.
              </li>
              <li>
                Menggerakkan solidaritas sosial dan kemanusiaan dalam menghadapi
                berbagai persoalan masyarakat melalui aksi nyata dan gotong
                royong.
              </li>
              <li>
                Menjadi wadah perjuangan rakyat dan aspirasi masyarakat umum
                dalam menyalurkan gagasan, pendapat, serta memperjuangkan
                hak-hak sosial dan keadilan publik.
              </li>
              <li>
                Mendorong lahirnya generasi yang berintegritas dan berjiwa
                nasionalis, serta menjadikan nilai hukum dan kemanusiaan sebagai
                dasar moral kehidupan berbangsa dan bernegara.
              </li>
              <li>
                Membangun jaringan kemitraan dan kolaborasi dengan berbagai
                elemen masyarakat, lembaga, dan instansi guna memperkuat peran
                sosial dan hukum di tingkat lokal maupun nasional.
              </li>
              <li>
                Menjadi gerakan moral dan sosial yang independen, yang berpihak
                pada kebenaran dan kemaslahatan bersama tanpa diskriminasi dan
                kepentingan politik sempit.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
