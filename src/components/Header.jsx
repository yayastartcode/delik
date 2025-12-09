import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/lgdelik.png" 
              alt="ORBAKUM DELIK Logo" 
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">ORBAKUM DELIK</h1>
              <p className="text-xs text-gray-600">Delapan Lintang Keadilan</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
            <a href="#tentang" className="text-gray-700 hover:text-blue-600 font-medium transition">Tentang Kami</a>
            <a href="#layanan" className="text-gray-700 hover:text-blue-600 font-medium transition">Layanan</a>
            <a href="#struktur" className="text-gray-700 hover:text-blue-600 font-medium transition">Struktur Organisasi</a>
            <a href="#legalitas" className="text-gray-700 hover:text-blue-600 font-medium transition">Legalitas</a>
            <a href="#kontak" className="text-gray-700 hover:text-blue-600 font-medium transition">Kontak</a>
          </nav>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block text-gray-700 hover:text-blue-600 font-medium transition py-2">Home</a>
            <a href="#tentang" className="block text-gray-700 hover:text-blue-600 font-medium transition py-2">Tentang Kami</a>
            <a href="#layanan" className="block text-gray-700 hover:text-blue-600 font-medium transition py-2">Layanan</a>
            <a href="#struktur" className="block text-gray-700 hover:text-blue-600 font-medium transition py-2">Struktur Organisasi</a>
            <a href="#legalitas" className="block text-gray-700 hover:text-blue-600 font-medium transition py-2">Legalitas</a>
            <a href="#kontak" className="block text-gray-700 hover:text-blue-600 font-medium transition py-2">Kontak</a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
