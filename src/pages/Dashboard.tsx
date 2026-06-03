import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Circle, Flame, Droplet, Dumbbell, Utensils, Send, Medal, Target, Brain, Trophy, Lightbulb } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const TIPS = [
  "A hidratação constante ajuda a controlar a fome. Beba um copo de água antes das refeições.",
  "O músculo cresce durante o descanso. Não negligencie suas 7-8 horas de sono.",
  "A consistência supera a intensidade. O básico bem feito todos os dias traz os melhores resultados.",
  "Proteína em todas as refeições ajuda a manter a saciedade prolongada e preserva a massa magra.",
  "Focar na respiração durante o exercício pode aumentar a eficiência do seu treino em até 20%.",
  "O açúcar escondido nos alimentos processados é o maior inimigo da definição abdominal.",
  "Não pule o aquecimento! Ele prepara as articulações e evita lesões a longo prazo.",
  "Mastigue devagar. O cérebro leva cerca de 20 minutos para registrar que o estômago está cheio.",
  "A motivação faz você começar, mas é a disciplina que faz você continuar.",
  "Fibras são essenciais: adicione mais folhas verdes ao seu almoço e jantar.",
  "Troque o foco da balança para as medidas e em como suas roupas estão vestindo.",
  "O estresse eleva o cortisol, que favorece o acúmulo de gordura. Tire 5 min para respirar fundo hoje.",
  "Carboidratos não são inimigos, são combustível. Use-os com inteligência nos horários de treino.",
  "Treinar força é o melhor anti-idade natural que existe para ossos e articulações.",
  "A fome física é gradual; a vontade de comer é repentina e pede alimentos específicos.",
  "O que você faz aos finais de semana representa quase 30% do seu mês. Mantenha o foco!",
  "Cargas maiores ou mais repetições: a progressão de carga é o segredo da evolução muscular.",
  "Planeje suas refeições na noite anterior. Não deixe sua dieta à mercê da fome do dia.",
  "Suor não significa necessariamente queimar gordura. Foque na intensidade e frequência cardíaca.",
  "Celebre as pequenas vitórias! Cada dia concluído do desafio é um passo a mais para sua transformação."
];

export default function Dashboard() {
  const { goal, currentDay, checkIns, addCheckIn } = useAppContext();
  const [feeling, setFeeling] = useState('');

  const isEmagrecimento = goal === 'emagrecimento';
  const hasCheckedIn = !!checkIns[currentDay];
  const checkInCount = Object.keys(checkIns).length;
  // Get tip based on currentDay (1-20), safely wrap around just in case
  const dailyTip = TIPS[(currentDay - 1) % TIPS.length];

  const BADGES = [
    { id: 1, title: 'O Primeiro Passo', req: 1, icon: Medal, color: 'text-blue-400', border: 'border-blue-400/30', bg: 'bg-blue-400/10' },
    { id: 2, title: 'No Embalo', req: 5, icon: Flame, color: 'text-fire', border: 'border-fire/30', bg: 'bg-fire/10' },
    { id: 3, title: 'Metade do Caminho', req: 10, icon: Target, color: 'text-green-500', border: 'border-green-500/30', bg: 'bg-green-500/10' },
    { id: 4, title: 'Mente Inabalável', req: 15, icon: Brain, color: 'text-purple-400', border: 'border-purple-400/30', bg: 'bg-purple-400/10' },
    { id: 5, title: 'Transformação Real', req: 20, icon: Trophy, color: 'text-gold2', border: 'border-gold2/30', bg: 'bg-gold2/10' },
  ];

  const handleCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (feeling.trim()) {
      addCheckIn(currentDay, feeling.trim());
      setFeeling('');
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <header className="mb-10">
        <h1 className="font-bebas text-4xl md:text-5xl text-white">
          BEM-VINDO AO <span className="text-fire2">DIA {currentDay}</span>
        </h1>
        <p className="text-white/60 font-light mt-2">
          Faltam {20 - currentDay} dias para concluir o seu desafio de {isEmagrecimento ? 'emagrecimento' : 'ganho de massa'}.
        </p>
      </header>

      {/* Progress Bar */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
        <div className="flex justify-between items-end mb-4">
          <div className="font-condensed font-bold tracking-widest uppercase text-sm text-gold2">Progresso do Desafio</div>
          <div className="font-bebas text-2xl text-white">{(currentDay / 20 * 100).toFixed(0)}%</div>
        </div>
        <div className="h-3 w-full bg-dark3 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(currentDay / 20) * 100}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-fire to-gold2 rounded-full"
          />
        </div>
      </div>

      {/* Daily Tasks */}
      <div className="mb-10">
        <h2 className="font-condensed font-bold text-xl tracking-wider uppercase text-white mb-6">Metas de Hoje</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-fire/10 flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-fire" />
              </div>
              <div>
                <div className="font-condensed font-bold uppercase tracking-wider">Treino</div>
                <div className="text-xs text-white/50">{isEmagrecimento ? 'HIIT Funcional' : 'Treino A (Peito/Tríceps)'}</div>
              </div>
            </div>
            <Circle className="w-6 h-6 text-white/30" />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <Utensils className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <div className="font-condensed font-bold uppercase tracking-wider">Dieta</div>
                <div className="text-xs text-white/50">Bater {isEmagrecimento ? 'Déficit calórico' : 'Superávit e Meta de Proteína'}</div>
              </div>
            </div>
            <Circle className="w-6 h-6 text-white/30" />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Droplet className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="font-condensed font-bold uppercase tracking-wider">Água</div>
                <div className="text-xs text-white/50">3 Litros diários</div>
              </div>
            </div>
            <CheckCircle2 className="w-6 h-6 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Daily Tip */}
      <div className="bg-gold/10 border border-gold/30 rounded-xl p-5 mb-10 flex gap-4 items-start shadow-[0_0_15px_rgba(255,215,0,0.05)]">
        <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
          <Lightbulb className="w-6 h-6 text-gold" />
        </div>
        <div>
          <h3 className="font-condensed font-bold tracking-widest text-gold uppercase mb-1">Dica do Dia</h3>
          <p className="text-white/80 font-light text-[15px] leading-relaxed">
            {dailyTip}
          </p>
        </div>
      </div>

      {/* Daily Check-in */}
      <div className="mb-10">
        <h2 className="font-condensed font-bold text-xl tracking-wider uppercase text-white mb-6">Check-in Diário</h2>
        
        {hasCheckedIn ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center"
          >
            <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="font-bebas text-2xl text-green-500 mb-2">Check-in Concluído!</h3>
            <p className="text-white/60 text-sm">Seu sentimento hoje: <span className="text-white italic">"{checkIns[currentDay]}"</span></p>
          </motion.div>
        ) : (
          <form onSubmit={handleCheckIn} className="bg-white/5 border border-white/10 rounded-xl p-6">
            <label className="block font-condensed font-bold tracking-widest text-sm text-white/70 uppercase mb-3 text-center md:text-left">
              Como você está se sentindo após as metas de hoje?
            </label>
            <div className="flex flex-col md:flex-row gap-3">
              <input 
                type="text" 
                value={feeling}
                onChange={(e) => setFeeling(e.target.value)}
                placeholder="Ex: Treino foi pesado, mas me sinto ótimo..." 
                className="flex-1 bg-dark3 border border-white/10 rounded-lg p-4 text-white placeholder-white/30 focus:outline-none focus:border-fire2 transition-colors"
                required
              />
              <button 
                type="submit"
                disabled={!feeling.trim()}
                className="bg-fire2 text-white font-condensed font-bold uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-fire transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Concluir <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Achievements (Badges) */}
      <div className="mb-10">
        <h2 className="font-condensed font-bold text-xl tracking-wider uppercase text-white mb-6 flex justify-between items-end">
          <span>Conquistas</span>
          <span className="text-sm text-white/50">{checkInCount} check-ins realizados</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {BADGES.map((badge) => {
            const isUnlocked = checkInCount >= badge.req;
            return (
              <div 
                key={badge.id}
                className={`relative flex flex-col items-center p-4 rounded-xl border transition-all ${
                  isUnlocked 
                    ? `bg-white/5 ${badge.border} shadow-[0_0_15px_rgba(255,255,255,0.05)]` 
                    : 'bg-white/5 border-white/5 opacity-50 grayscale'
                }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${isUnlocked ? badge.bg : 'bg-white/5'}`}>
                  <badge.icon className={`w-7 h-7 ${isUnlocked ? badge.color : 'text-white/30'}`} />
                </div>
                <h3 className="font-condensed font-bold uppercase tracking-wider text-center text-sm mb-1 text-white">
                  {badge.title}
                </h3>
                <div className="text-xs text-white/40 font-light">
                  {badge.req} Dias
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Daily Mindset */}
      <div className="bg-gradient-to-br from-dark2 to-dark border-l-4 border-fire2 rounded-r-xl p-6 relative overflow-hidden">
        <Flame className="absolute -right-6 -bottom-6 w-32 h-32 text-fire/5 rotate-12" />
        <h3 className="font-condensed font-bold tracking-widest text-fire2 uppercase mb-2">Hack Mental do Dia</h3>
        <blockquote className="text-lg text-white/80 italic font-light relative z-10">
          "A disciplina é a ponte entre seus objetivos e suas realizações. Não negocie com a sua mente quando o despertador tocar."
        </blockquote>
      </div>

    </div>
  );
}
