export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#fdf6f0] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="images/about.jpg"
                alt="Nossa confeiteira"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5c3d2e]/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 max-w-[200px]">
              <div className="w-12 h-12 rounded-full bg-[#fde8ec] flex items-center justify-center text-2xl flex-shrink-0">
                🏆
              </div>
              <div>
                <div className="font-playfair font-bold text-[#5c3d2e] text-base leading-tight">Premiada</div>
                <div className="font-lato text-xs text-[#9b7b6e] mt-0.5">Melhor confeitaria artesanal 2024</div>
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-4 border-[#e8d5b0]/50" />
          </div>

          {/* Text side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#fde8ec] rounded-full px-4 py-1.5 mb-5">
              <span className="text-[#c97b84] text-xs font-lato font-bold tracking-widest uppercase">Nossa História</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#5c3d2e] leading-tight mb-5">
              Feito com amor e{" "}
              <em className="italic text-[#c97b84]">dedicação</em>
            </h2>
            <div className="section-divider mb-6" style={{ margin: '0 0 24px 0' }} />
            <p className="font-lato text-[#7a5c4f] text-base leading-relaxed mb-5">
              Nascemos do amor pela confeitaria artesanal e do desejo de criar experiências únicas.
              Cada receita é desenvolvida com atenção aos detalhes, usando ingredientes selecionados
              e técnicas aprimoradas ao longo de anos de dedicação.
            </p>
            <p className="font-lato text-[#7a5c4f] text-base leading-relaxed mb-8">
              Seja para um casamento dos sonhos, um aniversário especial ou aquele mimo do dia a dia,
              cada criação carrega nossa essência: <strong className="text-[#5c3d2e]">sabor incomparável e apresentação impecável.</strong>
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🌿", title: "Ingredientes Naturais", desc: "Sem conservantes artificiais" },
                { icon: "👩‍🍳", title: "Feito na Hora", desc: "Sempre fresquinho pra você" },
                { icon: "🎨", title: "Personalizado", desc: "Do seu jeito, do seu gosto" },
                { icon: "📦", title: "Entrega Segura", desc: "Embalagem especial protetora" },
              ].map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-[#f0e0d6] hover:border-[#e8b4b8] transition-colors"
                >
                  <span className="text-xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <div className="font-lato font-bold text-[#5c3d2e] text-sm">{f.title}</div>
                    <div className="font-lato text-[#9b7b6e] text-xs mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
