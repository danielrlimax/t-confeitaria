const testimonials = [
  {
    name: "Ana Souza",
    role: "Noiva",
    avatar: "A",
    color: "#c97b84",
    rating: 5,
    text: "O bolo do meu casamento foi absolutamente perfeito! A equipe entendeu exatamente o que eu queria e o resultado superou todas as minhas expectativas. Os convidados adoraram!",
  },
  {
    name: "Carla Mendes",
    role: "Aniversariante",
    avatar: "C",
    color: "#c9a96e",
    rating: 5,
    text: "Encomendei os brigadeiros gourmet para meu aniversário e foram um sucesso total! Sabor incrível, apresentação linda. Com certeza voltarei a pedir sempre!",
  },
  {
    name: "Fernanda Lima",
    role: "Mãe de gêmeos",
    avatar: "F",
    color: "#a78bcf",
    rating: 5,
    text: "Os bolos temáticos para o aniversário dos meus filhos ficaram lindos demais! Super personalizados e gostosos. Atendimento maravilhoso do começo ao fim.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-[#f4b942]" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#fde8ec] rounded-full px-4 py-1.5 mb-5">
            <span className="text-[#c97b84] text-xs font-lato font-bold tracking-widest uppercase">Depoimentos</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#5c3d2e] mb-4">
            O que dizem nossos
            <br />
            <em className="italic text-[#c97b84]">clientes felizes</em>
          </h2>
          <div className="section-divider mb-5" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#fdf6f0] rounded-3xl p-7 border border-[#f0e0d6] card-hover relative"
            >
              {/* Quote icon */}
              <div
                className="absolute top-6 right-6 text-5xl font-playfair leading-none opacity-15"
                style={{ color: t.color }}
              >
                "
              </div>

              <StarRating count={t.rating} />

              <p className="font-lato text-[#7a5c4f] text-sm leading-relaxed mt-4 mb-6 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-playfair font-bold text-lg flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-lato font-bold text-[#5c3d2e] text-sm">{t.name}</div>
                  <div className="font-lato text-[#9b7b6e] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {[
            { icon: "⭐", value: "5.0", label: "Avaliação média" },
            { icon: "💬", value: "200+", label: "Avaliações positivas" },
            { icon: "🔄", value: "95%", label: "Clientes que retornam" },
            { icon: "❤️", value: "500+", label: "Clientes atendidos" },
          ].map((b) => (
            <div key={b.label} className="text-center">
              <div className="text-2xl mb-1">{b.icon}</div>
              <div className="font-playfair text-2xl font-bold text-[#5c3d2e]">{b.value}</div>
              <div className="font-lato text-xs text-[#9b7b6e] mt-0.5">{b.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
