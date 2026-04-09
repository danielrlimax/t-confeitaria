const images = [
  {
    src: "images/gallery-1.jpg",
    alt: "Macarons coloridos",
    label: "Macarons Franceses",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: "images/hero-cake.jpg",
    alt: "Bolo de casamento",
    label: "Bolo de Casamento",
    span: "md:col-span-1",
  },
  {
    src: "images/gallery-2.jpg",
    alt: "Bolo de chocolate",
    label: "Bolo Chocolate Premium",
    span: "md:col-span-1",
  },
  {
    src: "images/gallery-3.jpg",
    alt: "Cupcakes decorados",
    label: "Cupcakes Gourmet",
    span: "md:col-span-1",
  },
  {
    src: "images/gallery-4.jpg",
    alt: "Bolo de aniversário",
    label: "Bolo Floral",
    span: "md:col-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-[#fdf6f0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#fde8ec] rounded-full px-4 py-1.5 mb-5">
            <span className="text-[#c97b84] text-xs font-lato font-bold tracking-widest uppercase">Galeria</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#5c3d2e] mb-4">
            Nossas{" "}
            <em className="italic text-[#c97b84]">criações</em>
          </h2>
          <div className="section-divider mb-5" />
          <p className="font-lato text-[#7a5c4f] text-base max-w-xl mx-auto">
            Cada peça é uma obra de arte comestível, criada com atenção aos mínimos detalhes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {images.map((img) => (
            <div
              key={img.src}
              className={`img-overlay rounded-2xl overflow-hidden shadow-md ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-end p-4 z-10">
                <span className="font-playfair text-white text-sm font-medium drop-shadow-lg">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-sm border border-[#f0e0d6] px-6 py-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="font-lato font-bold text-[#5c3d2e] text-sm">Siga no Instagram</div>
              <div className="font-lato text-[#9b7b6e] text-xs">@doce.atelie • Novas criações todo dia!</div>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-gradient-to-r from-[#f09433] to-[#bc1888] text-white font-lato text-xs font-bold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Seguir
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
