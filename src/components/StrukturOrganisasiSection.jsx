function StrukturOrganisasiSection() {
  return (
    <section id="struktur" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Struktur Organisasi
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-4 overflow-hidden">
              <img
                src="/images/dpp.png"
                alt="Struktur Organisasi Bagian Atas"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-4 overflow-hidden">
              <img
                src="/images/dpc.jpg"
                alt="Struktur Organisasi Bagian Bawah"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrukturOrganisasiSection;
