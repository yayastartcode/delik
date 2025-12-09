function InfoSection() {
  return (
    <section className="bg-yellow-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Apakah Anda Sedang Menghadapi Masalah Hukum?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Jangan biarkan masalah ini merusak hari Anda! Kami di{' '}
            <span className="font-bold text-blue-900">
              Organisasi Bantuan Hukum Delapan Lintang Keadilan (ORBAKUM DELIK)
            </span>{' '}
            siap membantu Anda mengatasi masalah hukum dengan{' '}
            <span className="font-semibold text-blue-800">
              profesional, cepat, dan terpercaya
            </span>
            .
          </p>

          <div className="pt-6">
            <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xl font-bold text-gray-800">Layanan 24 Jam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
