function ContactSection() {
  return (
    <section id="kontak" className="bg-white">
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.384895457239!2d110.92288300765685!3d-7.600014222974633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a180ae20e7bb9%3A0x7ed74ad423068134!2s9WXF%2BCW%2C%20Jl.%20Jendral%20Basuki%20Rahmat%20No.1%2C%20Pundungrejo%2C%20Jati%2C%20Kec.%20Jaten%2C%20Kabupaten%20Karanganyar%2C%20Jawa%20Tengah%2057731!5e0!3m2!1sid!2sid!4v1765274487131!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi ORBAKUM DELIK"
        ></iframe>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Hubungi Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-blue-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Alamat</h3>
              <p className="text-gray-700">
                Jl. Jendral Basuki Rahmat No.1, Pundungrejo, Jati, Kec. Jaten,
                Kabupaten Karanganyar, Jawa Tengah 57731
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">WhatsApp</h3>
              <a
                href="https://wa.me/62882005371570"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-semibold text-lg"
              >
                +62 882005371570
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-blue-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Email</h3>
              <a
                href="mailto:delikdelapanlintangkeadilan@gmail.com"
                className="text-blue-900 hover:text-blue-700 font-semibold"
              >
                delikdelapanlintangkeadilan@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
              Ikuti Kami di Media Sosial
            </h3>
            <div className="flex justify-center items-center gap-8">
              <a
                href="https://web.facebook.com/profile.php?id=100092694251975"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg
                  className="w-12 h-12 text-blue-600 hover:text-blue-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@orbakum.delik"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-110"
                aria-label="TikTok"
              >
                <svg
                  className="w-12 h-12 text-gray-900 hover:text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>

              <a
                href="YOUR_INSTAGRAM_URL_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  className="w-12 h-12 text-pink-600 hover:text-pink-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
