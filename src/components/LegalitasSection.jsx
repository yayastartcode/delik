import { useState } from "react";

function LegalitasSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const legalDocuments = [
    {
      id: 1,
      url: "/images/akta.jpeg",
      alt: "Dokumen Legalitas 1",
    },
    {
      id: 2,
      url: "/images/nib.jpeg",
      alt: "Dokumen Legalitas 2",
    },
    {
      id: 3,
      url: "/images/npdl.jpeg",
      alt: "Dokumen Legalitas 3",
    },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="legalitas" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Legalitas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legalDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
                onClick={() => openLightbox(doc)}
              >
                <img
                  src={doc.url}
                  alt={doc.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="text-gray-700 font-medium">{doc.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <div className="max-w-5xl max-h-full overflow-auto">
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default LegalitasSection;
