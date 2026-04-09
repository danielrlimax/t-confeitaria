

import { heroCake } from "../assets/images";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="images/hero-cake.jpg"
          alt="Bolo de confeitaria"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-32 h-32 rounded-full border border-white/10 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 right-8 w-20 h-20 rounded-full border border-white/10 animate-float" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
          <span className="text-[#e8d5b0] text-xs tracking-[0.2em] uppercase font-lato">
            ✦ Confeitaria Artesanal ✦
          </span>
        </div>

        {/* Title */}
        <h1 className="font-playfair text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-200">
          Doces que contam
          <br />
          <em className="font-playfair italic text-[#e8b4b8]">histórias de amor</em>
        </h1>

        {/* Subtitle */}
        <p className="font-lato text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up delay-300">
          Cada bolo é criado com carinho, ingredientes selecionados e muito amor.
          Transformamos momentos especiais em memórias inesquecíveis.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido.%20Vi%20o%20site%20de%20vocês."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25d366] hover:bg-[#1da855] text-white font-lato font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 whatsapp-pulse text-base"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pedir pelo WhatsApp
          </a>
          <button
            onClick={() => scrollTo("#contato")}
            className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-lato font-bold px-8 py-4 rounded-full border border-white/40 transition-all duration-300 hover:-translate-y-1 text-base"
          >
            Enviar Mensagem
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in-up delay-500">
          {[
            { num: "500+", label: "Clientes felizes" },
            { num: "8+", label: "Anos de experiência" },
            { num: "100%", label: "Ingredientes naturais" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-playfair text-3xl font-bold text-[#e8d5b0]">{stat.num}</div>
              <div className="font-lato text-xs text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-lato text-xs text-white/60 tracking-widest uppercase">Explorar</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
