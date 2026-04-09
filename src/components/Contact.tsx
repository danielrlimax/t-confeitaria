import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  event: string;
  date: string;
  guests: string;
  message: string;
};

const eventTypes = [
  "Casamento", "Aniversário", "Chá de bebê", "Chá de panela",
  "Formatura", "Corporativo", "Outro"
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", event: "", date: "", guests: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 10) {
      return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    }
    return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setForm((prev) => ({ ...prev, phone: formatted }));
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `👋 Olá! Meu nome é *${form.name}*`,
      `📱 Telefone: ${form.phone}`,
      form.event && `🎉 Tipo de evento: ${form.event}`,
      form.date && `📅 Data do evento: ${form.date}`,
      form.guests && `👥 Nº de convidados: ${form.guests}`,
      form.message && `\n💬 Mensagem:\n${form.message}`,
    ].filter(Boolean);

    return encodeURIComponent(lines.join("\n"));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/5511999999999?text=${msg}`, "_blank");
  };

  const isValid = form.name.trim().length > 1 && form.phone.replace(/\D/g, "").length >= 10;

  return (
    <section id="contato" className="py-24 bg-[#fdf6f0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#fde8ec] rounded-full px-4 py-1.5 mb-5">
            <span className="text-[#c97b84] text-xs font-lato font-bold tracking-widest uppercase">Fale Conosco</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#5c3d2e] mb-4">
            Vamos criar algo
            <br />
            <em className="italic text-[#c97b84]">especial juntos?</em>
          </h2>
          <div className="section-divider mb-5" />
          <p className="font-lato text-[#7a5c4f] text-base max-w-xl mx-auto">
            Preencha o formulário e entraremos em contato pelo WhatsApp, ou fale diretamente conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Info side */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp direct */}
            <div className="bg-white rounded-3xl p-6 border border-[#f0e0d6] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#25d366]/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="#25d366" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-lato font-bold text-[#5c3d2e] text-sm">WhatsApp</div>
                  <div className="font-lato text-[#9b7b6e] text-xs">Resposta em até 1h</div>
                </div>
              </div>
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1da855] text-white font-lato font-bold py-3 rounded-2xl transition-all duration-300 text-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chamar agora no WhatsApp
              </a>
            </div>

            {/* Info cards */}
            {[
              {
                icon: "🕐",
                title: "Horário de Atendimento",
                lines: ["Seg a Sex: 9h às 18h", "Sábado: 9h às 14h", "Dom: Apenas delivery"],
              },
              {
                icon: "📍",
                title: "Localização",
                lines: ["São Paulo, SP", "Delivery na Grande SP", "Retirada no ateliê"],
              },
              {
                icon: "⏳",
                title: "Prazo de Encomenda",
                lines: ["Bolos: 7 dias de antecedência", "Docinhos: 3 dias", "Urgências: consulte"],
              },
            ].map((info) => (
              <div key={info.title} className="bg-white rounded-2xl p-5 border border-[#f0e0d6] shadow-sm flex gap-4">
                <span className="text-2xl flex-shrink-0">{info.icon}</span>
                <div>
                  <div className="font-lato font-bold text-[#5c3d2e] text-sm mb-1">{info.title}</div>
                  {info.lines.map((line) => (
                    <div key={line} className="font-lato text-[#9b7b6e] text-xs">{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 border border-[#f0e0d6] shadow-sm">
              <h3 className="font-playfair text-2xl font-bold text-[#5c3d2e] mb-1">
                Solicitar Orçamento
              </h3>
              <p className="font-lato text-[#9b7b6e] text-sm mb-6">
                Preencha os dados e enviaremos sua mensagem pelo WhatsApp ✨
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block font-lato text-xs font-bold text-[#5c3d2e] mb-1.5 uppercase tracking-wide">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                      className="input-elegant w-full rounded-xl px-4 py-3 font-lato text-sm text-[#5c3d2e] placeholder-[#c4a99a]"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block font-lato text-xs font-bold text-[#5c3d2e] mb-1.5 uppercase tracking-wide">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handlePhoneChange}
                      placeholder="(11) 99999-9999"
                      required
                      maxLength={15}
                      className="input-elegant w-full rounded-xl px-4 py-3 font-lato text-sm text-[#5c3d2e] placeholder-[#c4a99a]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Event type */}
                  <div>
                    <label className="block font-lato text-xs font-bold text-[#5c3d2e] mb-1.5 uppercase tracking-wide">
                      Tipo de Evento
                    </label>
                    <select
                      name="event"
                      value={form.event}
                      onChange={handleChange}
                      className="input-elegant w-full rounded-xl px-4 py-3 font-lato text-sm text-[#5c3d2e] cursor-pointer"
                    >
                      <option value="">Selecione...</option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  {/* Date */}
                  <div>
                    <label className="block font-lato text-xs font-bold text-[#5c3d2e] mb-1.5 uppercase tracking-wide">
                      Data do Evento
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="input-elegant w-full rounded-xl px-4 py-3 font-lato text-sm text-[#5c3d2e]"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block font-lato text-xs font-bold text-[#5c3d2e] mb-1.5 uppercase tracking-wide">
                    Número de Convidados
                  </label>
                  <input
                    type="number"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    placeholder="Ex: 50"
                    min="1"
                    className="input-elegant w-full rounded-xl px-4 py-3 font-lato text-sm text-[#5c3d2e] placeholder-[#c4a99a]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-lato text-xs font-bold text-[#5c3d2e] mb-1.5 uppercase tracking-wide">
                    Detalhes do Pedido
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Conte-nos mais sobre o que você deseja: sabores, tema, referências..."
                    className="input-elegant w-full rounded-xl px-4 py-3 font-lato text-sm text-[#5c3d2e] placeholder-[#c4a99a] resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`w-full flex items-center justify-center gap-3 font-lato font-bold py-4 rounded-2xl transition-all duration-300 text-base ${
                    isValid
                      ? "bg-[#25d366] hover:bg-[#1da855] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enviar pelo WhatsApp
                </button>

                <p className="text-center font-lato text-xs text-[#b09b90]">
                  Ao enviar, você será redirecionado(a) para o WhatsApp com as informações preenchidas.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
