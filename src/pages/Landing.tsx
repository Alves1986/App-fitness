import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Dumbbell, Brain, Check, X, Star, ShieldCheck, 
  ChevronDown, Calendar, Pill, BookOpen, Utensils, Zap, Play, CheckCircle2, FlaskConical, Salad, AlertOctagon
} from 'lucide-react';
import { Link } from 'react-router-dom';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex justify-center gap-4 my-8">
      {[
        { label: 'HORAS', value: pad(timeLeft.hours) },
        { label: 'MINUTOS', value: pad(timeLeft.minutes) },
        { label: 'SEGUNDOS', value: pad(timeLeft.seconds) },
      ].map((unit, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-white/5 border border-white/10 rounded-lg w-24 h-24 flex items-center justify-center mb-2 shadow-inner">
            <span className="font-bebas text-5xl md:text-6xl text-fire">{unit.value}</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-white/50 font-condensed font-bold">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="font-condensed font-bold text-xl uppercase tracking-wide text-white group-hover:text-fire2 transition-colors">
          {question}
        </span>
        <ChevronDown className={`w-6 h-6 text-fire2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-white/60 leading-relaxed text-[15px]">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-fire/30">
      
      {/* 1. Barra de urgência */}
      <div className="bg-urgency text-dark font-condensed font-bold text-sm tracking-widest py-3 px-4 text-center">
        🔥 OFERTA ESPECIAL — ACESSO IMEDIATO + 7 DIAS GRÁTIS NO APP | VAGAS LIMITADAS — GARANTA AGORA
      </div>

      {/* 2. Hero com estatísticas sociais */}
      <section className="hero-bg min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-fire/10 blur-[120px]" />
          <div className="absolute bottom-[20%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-gold2/10 blur-[100px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
          className="inline-block bg-gradient-to-r from-fire to-gold2 text-dark font-condensed font-black text-sm tracking-[0.2em] uppercase py-2 px-6 rounded animate-pulse shadow-[0_0_20px_rgba(255,69,0,0.3)] mb-8"
        >
          🏆 O MÉTODO #1 EM EMAGRECIMENTO REAL
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bebas text-6xl md:text-[120px] leading-[0.9] tracking-wide text-gradient-hero relative z-10 mb-6"
        >
          DESAFIO<br />EMAGREÇA<br />EM 20 DIAS
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="font-condensed font-semibold text-xl md:text-3xl text-white/90 max-w-3xl mx-auto mb-4"
        >
          O método que une alimentação inteligente + treino de academia + mentalidade vencedora para transformar seu corpo de vez — com ciência, sem sofrimento.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="font-light text-white/50 max-w-2xl mx-auto mb-12"
        >
          Perca até 5kg de gordura, ganhe tônus muscular e energia renovada — em apenas 20 dias de método estratégico.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
        >
          {[
            { num: '+10mil', label: 'Pessoas Transformadas' },
            { num: '20', label: 'Dias de Desafio' },
            { num: '5kg', label: 'Perda Média' },
            { num: '97%', label: 'De Satisfação' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="font-bebas text-5xl md:text-6xl text-fire2 leading-none mb-1">{stat.num}</div>
              <div className="font-condensed text-xs text-white/50 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
          <a href="#comprar" className="btn-cta inline-block font-condensed font-black text-xl md:text-2xl tracking-wider uppercase py-5 px-10 rounded text-center">
            🔥 QUERO TRANSFORMAR MEU CORPO AGORA
          </a>
          <p className="mt-4 text-sm text-white/40 font-light">
            ✓ Acesso imediato &nbsp;|&nbsp; ✓ Garantia de 7 dias &nbsp;|&nbsp; ✓ Pagamento 100% seguro
          </p>
        </motion.div>
      </section>

      {/* 3. Seção de Dor */}
      <section className="bg-gradient-to-b from-dark to-dark2 py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="font-condensed font-bold text-xs tracking-[0.3em] uppercase text-fire2 mb-3">VOCÊ SE IDENTIFICA?</div>
          <h2 className="font-bebas text-5xl md:text-7xl mb-6">
            CANSADO DE <span className="text-fire2">TENTAR SEM RESULTADO?</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-fire to-gold mx-auto mb-8 rounded"></div>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Se você está lendo isso, é porque já tentou — e algo não funcionou. 
            A culpa <em className="italic text-white">não foi sua</em>. Foi o método errado.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-left mb-12">
            {[
              "Já tentou dietas e perdeu peso, mas voltou tudo rapidinho",
              "Vai à academia mas não vê resultado no espelho",
              "Se sente sem energia e disposto para treinar direito",
              "Já gastou com suplementos que não fizeram diferença",
              "Treina pesado mas a barriga teimosa não some",
              "Sente que o seu metabolismo é mais lento que o de todos",
              "Desiste no meio por falta de orientação e motivação",
              "Não sabe o que comer antes e depois do treino"
            ].map((pain, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-fire/5 border border-fire/20 rounded-lg p-4 flex gap-4 items-start text-white/80"
              >
                <X className="w-5 h-5 text-fire shrink-0 mt-0.5 border-2 border-fire rounded-full p-0.5" />
                <span className="text-[15px]">{pain}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="bg-gradient-to-r from-fire/10 to-gold2/5 border-l-4 border-fire2 p-6 rounded-r-lg text-left"
          >
            <p className="text-lg text-white/90 leading-relaxed font-medium">
              💡 <strong className="text-white">A verdade que ninguém te conta:</strong> O problema nunca foi você. Foi a falta de um sistema completo que une os três pilares: alimentação certa, treino estratégico e mentalidade vencedora. Esse é o Desafio Emagreça em 20 Dias.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Os 3 Pilares */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-5xl mx-auto text-center">
          <div className="font-condensed font-bold text-xs tracking-[0.3em] uppercase text-fire2 mb-3">A SOLUÇÃO DEFINITIVA</div>
          <h2 className="font-bebas text-5xl md:text-7xl mb-6">
            O <span className="text-fire2">MÉTODO</span> QUE FUNCIONA DE VERDADE
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-fire to-gold mx-auto mb-8 rounded"></div>

          <p className="text-lg text-white/70 max-w-3xl mx-auto font-light leading-relaxed mb-16">
            O Desafio Emagreça em 20 Dias não é mais uma dieta. É um sistema completo, desenvolvido especificamente para a rotina brasileira, que vai reprogramar seu metabolismo, seu treino e sua mentalidade em menos de 3 semanas.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Salad, title: 'ALIMENTAÇÃO INTELIGENTE', text: 'Sem passar fome, sem contar calorias obsessivamente. Coma mais, escolha melhor. Cardápio completo para os 20 dias.' },
              { icon: Dumbbell, title: 'TREINO ESTRATÉGICO', text: '20 a 40 minutos por dia na academia. Exercícios exatos para cada fase do desafio, do iniciante ao avançado.' },
              { icon: Brain, title: 'MENTALIDADE VENCEDORA', text: 'O corpo segue a mente. Hábitos diários, as 5 leis mentais do emagrecimento e estratégias para nunca mais desistir.' }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-fire/5 hover:-translate-y-2 hover:border-fire/30 transition-all duration-300"
              >
                <pillar.icon className="w-16 h-16 text-fire2 mb-6 mx-auto" />
                <h3 className="font-bebas text-3xl text-fire2 mb-4">{pillar.title}</h3>
                <p className="text-white/60 text-[15px] leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Para Quem É */}
      <section className="py-24 px-4 bg-dark2">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-condensed font-bold text-xs tracking-[0.3em] uppercase text-fire2 mb-3">PÚBLICO-ALVO</div>
          <h2 className="font-bebas text-5xl md:text-7xl mb-6">
            ESSE DESAFIO É <span className="text-fire2">PARA VOCÊ?</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-fire to-gold mx-auto mb-16 rounded"></div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white/5 border border-green-500/30 rounded-xl p-8 shadow-[0_0_30px_rgba(0,200,81,0.05)]"
            >
              <h3 className="font-condensed font-black text-2xl uppercase tracking-wider text-green-500 mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8" /> ✓ Sim, é para você
              </h3>
              <ul className="space-y-4">
                {[
                  "Quer emagrecer mas não sabe por onde começar",
                  "Frequenta academia mas não vê resultado",
                  "Quer perder gordura sem perder músculo",
                  "Tem rotina corrida e precisa de método prático",
                  "Homens e mulheres entre 18 e 55 anos",
                  "Quem quer criar hábitos que duram para sempre"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-white/70 text-[15px] border-b border-white/5 pb-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white/5 border border-fire/30 rounded-xl p-8 shadow-[0_0_30px_rgba(255,69,0,0.05)]"
            >
              <h3 className="font-condensed font-black text-2xl uppercase tracking-wider text-fire mb-6 flex items-center gap-3">
                <X className="w-8 h-8 border-2 border-fire rounded-full p-1" /> ✗ Não é para você
              </h3>
              <ul className="space-y-4">
                {[
                  "Quem busca resultado sem nenhum esforço",
                  "Quem quer solução só em remédio ou cirurgia",
                  "Quem já tem resultado e não quer mudar nada",
                  "Quem não está disposto a comprometer 20 dias"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-white/70 text-[15px] border-b border-white/5 pb-3 last:border-0 hover:bg-transparent">
                    <X className="w-5 h-5 text-fire shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Timeline dos 20 Dias */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <div className="font-condensed font-bold text-xs tracking-[0.3em] uppercase text-fire2 mb-3">OS 20 DIAS</div>
          <h2 className="font-bebas text-5xl md:text-7xl mb-6">
            O QUE ACONTECE <span className="text-fire2">COM SEU CORPO</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-fire to-gold mb-12 rounded"></div>
          
          <p className="text-lg text-white/70 font-light leading-relaxed mb-16">
            Cada semana foi desenhada com propósito científico. Não é aleatório — é estratégico.
          </p>

          <div className="relative border-l-2 border-fire/50 ml-6 md:ml-10 space-y-16 pb-8">
            {[
              {
                step: '01', days: 'DIAS 1–5', title: '🔥 Despertar do Metabolismo',
                desc: 'Seu corpo acorda do modo economia. Eliminamos o açúcar, ativamos o sistema digestivo e iniciamos os treinos de forma progressiva. Você já sente mais energia nos primeiros dias.'
              },
              {
                step: '02', days: 'DIAS 6–10', title: '⚡ Aceleração — Modo Queima Ativa',
                desc: 'Intensificamos o treino com HIIT, introduzimos proteína em todas as refeições e o metabolismo entra em modo queima de gordura acelerada. A balança começa a se mover.'
              },
              {
                step: '03', days: 'DIAS 11–15', title: '📸 Resultados Visíveis no Espelho',
                desc: 'Ciclo de carboidratos, treinos em bi-set e resultados que você pode ver e sentir. Tire uma foto — o antes e depois já é perceptível. Seus amigos começam a comentar.'
              },
              {
                step: '04', days: 'DIAS 16–20', title: '🏆 Transformação Total',
                desc: 'Semana de definição. Circuit training de alta intensidade, protocolo anti-retenção e o grande resultado final. Você não é mais a mesma pessoa que começou. O novo corpo é real.'
              }
            ].map((phase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute -left-[30px] top-0 w-14 h-14 bg-gradient-to-br from-fire to-gold2 rounded-full flex items-center justify-center font-bebas text-2xl text-dark border-4 border-dark z-10 shadow-lg">
                  {phase.step}
                </div>
                <div className="font-bebas text-fire2 tracking-widest mb-1">{phase.days}</div>
                <h3 className="font-condensed font-bold text-2xl uppercase tracking-wider text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed">
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. O que você recebe */}
      <section className="py-24 px-4 bg-dark2 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-condensed font-bold text-xs tracking-[0.3em] uppercase text-fire2 mb-3">O QUE VOCÊ RECEBE</div>
            <h2 className="font-bebas text-5xl md:text-7xl mb-6">
              CONTEÚDO <span className="text-fire2">COMPLETO E EXCLUSIVO</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-fire to-gold mx-auto mb-8 rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Calendar, title: 'Plano de Treino Dia a Dia', desc: 'Grade completa de segunda a domingo, com exercícios, séries e descanso estratégico para cada fase dos 20 dias.' },
              { icon: Utensils, title: 'Cardápio dos 20 Dias', desc: 'Café, almoço, jantar e lanches. Com opções de substituição, sem passar fome e adaptado para a alimentação brasileira.' },
              { icon: Pill, title: 'Guia de Suplementação', desc: 'O que funciona de verdade (sem ilusão): whey, creatina, vitamina D e o que evitar para não desperdiçar dinheiro.' },
              { icon: Brain, title: 'As 5 Leis Mentais do Emagrecimento', desc: 'A parte que ninguém ensina. Mentalidade e psicologia do emagrecimento para nunca mais desistir no meio do caminho.' },
              { icon: BookOpen, title: 'Receitas Fitness Práticas', desc: 'Panqueca proteica, shake pós-treino, frango fit, saladas completas — saboroso, saudável e rápido de fazer.' },
              { icon: FlaskConical, title: 'Protocolo Detox de 3 Dias (BÔNUS)', desc: 'Limpeza metabólica para usar no início ou para resetar o corpo. Desincha, melhora a digestão e aumenta a energia.' },
              { icon: Dumbbell, title: 'Calculadora de Calorias (BÔNUS)', desc: 'Fórmula completa para calcular exatamente quantas calorias você precisa com base no seu peso, altura e nível de atividade.' },
              { icon: AlertOctagon, title: 'Os 10 Erros que Sabotam (BÔNUS)', desc: 'Pare de cometer esses erros agora mesmo. Do refrigerante zero ao cardio excessivo — o que está te impedindo de emagrecer.' }
            ].map((bonus, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * (idx%4) }}
                className="bg-white/5 border border-white/10 hover:border-gold/40 transition-colors duration-300 rounded-xl p-6 flex gap-5 items-start"
              >
                <bonus.icon className="w-10 h-10 text-gold2 shrink-0 mt-1" />
                <div>
                  <h4 className="font-condensed font-bold text-lg text-white uppercase tracking-wider mb-2">{bonus.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{bonus.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Depoimentos */}
      <section className="py-24 px-4 bg-gradient-to-b from-dark2 to-dark">
        <div className="max-w-5xl mx-auto text-center">
          <div className="font-condensed font-bold text-xs tracking-[0.3em] uppercase text-fire2 mb-3">RESULTADOS REAIS</div>
          <h2 className="font-bebas text-5xl md:text-7xl mb-6">
            QUEM JÁ VIVEU <span className="text-fire2">A TRANSFORMAÇÃO</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-fire to-gold mx-auto mb-8 rounded"></div>
          <p className="text-lg text-white/70 max-w-3xl mx-auto font-light leading-relaxed mb-16">
            Mais de 10.000 brasileiros já transformaram seus corpos com o método. Essas são histórias reais.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                name: 'Ana Paula Rodrigues',
                location: 'Curitiba, PR — 34 anos',
                result: '−5KG EM 20 DIAS 🔥',
                text: '"Perdi 5kg nos primeiros 20 dias. Jamais pensei que seria possível seguindo uma rotina tão prática. O cardápio é real, a comida é boa, e o treino se encaixa na minha agenda. O método muda tudo mesmo."'
              },
              {
                name: 'Rodrigo Ferreira',
                location: 'São Paulo, SP — 28 anos',
                result: 'ABDÔMEN APARECENDO 💪',
                text: '"3 anos na academia sem resultado. Finalmente vi meu abdômen aparecer em menos de 1 mês seguindo esse desafio. O treino é inteligente, não é só esforço aleatório. Recomendo pra todo mundo."'
              },
              {
                name: 'Fernanda Costa',
                location: 'Belo Horizonte, MG — 41 anos',
                result: '−3,5KG E RENOVADA ✨',
                text: '"Depois dos 40 achei que nunca mais conseguiria emagrecer. Errei feio! Perdi 3,5kg e me sinto 10 anos mais nova. A parte de mentalidade do ebook foi o que mais me ajudou a não desistir."'
              },
              {
                name: 'Carlos Eduardo Silva',
                location: 'Porto Alegre, RS — 52 anos',
                result: '−4KG AOS 52 ANOS 🏆',
                text: '"Com 52 anos, achei que era tarde. Mas o método é progressivo e funciona para qualquer idade. Perdi 4kg, a barriga diminuiu visivelmente e a disposição aumentou absurdamente. Valeu cada centavo."'
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
                </div>
                <p className="text-white/80 font-light italic leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="font-condensed font-bold text-lg text-fire2 uppercase tracking-widest">{testimonial.name}</div>
                <div className="text-white/40 text-sm mb-4">{testimonial.location}</div>
                <div className="inline-block bg-gradient-to-r from-fire to-gold2 text-dark font-condensed font-black text-xs tracking-widest px-3 py-1 rounded">
                  {testimonial.result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. App Upsell */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-condensed font-bold text-xs tracking-[0.3em] uppercase text-fire2 mb-3">CONHEÇA O APP</div>
            <h2 className="font-bebas text-5xl md:text-7xl mb-6">
              SUA ROTINA <span className="text-fire2">NA PALMA DA MÃO</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-fire to-gold mx-auto mb-8 rounded"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-fire/20 to-gold2/10 border border-fire/30 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="inline-block bg-gradient-to-r from-fire to-gold2 text-dark font-condensed font-black text-xs tracking-widest uppercase py-2 px-4 rounded mb-8">
              APLICATIVO COMPLETO
            </div>
            
            <h3 className="font-bebas text-4xl md:text-5xl text-white mb-6 leading-[1.1]">
              SEU PERSONAL E NUTRI DIGITAL 24H POR DIA
            </h3>
            
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Personalize seu objetivo: quer perder peso ou focar em hipertrofia na academia? 
              O app adapta cardápio e treinos na hora para o seu objetivo principal.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {[
                "Treinos para hipertrofia na academia",
                "Treinos HIIT e funcionais para perda de gordura",
                "Cardápio personalizado automático",
                "Contador de calorias e hidratação",
                "Evolução em fotos",
                "Mindset e Hacks mentais diários"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white/80 text-[15px]">
                  <Play className="w-3 h-3 text-fire2 fill-fire2 shrink-0" /> {feat}
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/onboarding" className="btn-cta inline-block font-condensed font-black text-2xl tracking-wider py-5 px-10 rounded uppercase hover:scale-[1.02] transition-transform">
                🚀 ENTRAR NO APP AGORA
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 13. Footer */}
      <footer className="bg-[#050505] py-12 px-4 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto text-white/30 text-xs leading-loose">
          <p className="text-white/50 mb-4 font-condensed tracking-widest text-sm uppercase"><strong>DESAFIO EMAGREÇA EM 20 DIAS</strong></p>
          <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-white/5">
            <a href="#" className="hover:text-white/70 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white/70 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white/70 transition-colors">Contato</a>
          </div>
          <p className="mt-8">© 2026 App Desafio Transformação. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
