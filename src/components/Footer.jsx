function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg mb-2">
            <span className="font-bold">ORBAKUM DELIK</span>
          </p>
          <p className="text-sm text-gray-300">
            Organisasi Bantuan Hukum Delapan Lintang Keadilan
          </p>
          <div className="mt-4 pt-4 border-t border-blue-800">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} ORBAKUM DELIK. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
