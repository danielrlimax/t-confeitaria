import { useState, useEffect } from "react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-glass shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex items-center gap-2 group"
        >
          <span className="text-2xl">🎂</span>
          <div className="leading-tight">
            <span
              className={`block font-playfair font-bold text-xl transition-colors duration-300 ${
                scrolled ? "text-[#5c3d2e]" : "text-white"
              }`}
            >
              Doce Ateliê
            </span>
            <span
              className={`block text-[10px] tracking-[0.2em] uppercase font-lato font-light transition-colors duration-300 ${
                scrolled ? "text-[#c9a96e]" : "text-[#e8d5b0]"
              }`}
            >
              Confeitaria Artesanal
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`font-lato text-sm tracking-wide transition-all duration-300 relative group ${
                scrolled ? "text-[#5c3d2e]" : "text-white"
              } hover:text-[#c97b84]`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#c97b84] rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contato"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contato"); }}
            className="ml-2 bg-[#c97b84] hover:bg-[#a0525c] text-white font-lato text-sm px-5 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Fazer Pedido
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className={`space-y-1.5 transition-all duration-300`}>
            <span
              className={`block h-0.5 w-6 rounded transition-all duration-300 ${
                scrolled ? "bg-[#5c3d2e]" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 rounded transition-all duration-300 ${
                scrolled ? "bg-[#5c3d2e]" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 rounded transition-all duration-300 ${
                scrolled ? "bg-[#5c3d2e]" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="navbar-glass mt-2 mx-4 rounded-2xl shadow-xl p-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-lato text-[#5c3d2e] text-base py-1 border-b border-[#e8d5b0] hover:text-[#c97b84] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contato"); }}
            className="mt-1 bg-[#c97b84] text-white font-lato text-sm px-5 py-2.5 rounded-full text-center transition-all duration-300 hover:bg-[#a0525c]"
          >
            Fazer Pedido
          </a>
        </div>
      </div>
    </header>
  );
}
