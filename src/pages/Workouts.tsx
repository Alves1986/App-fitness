import React from 'react';
import { Play, Clock, Flame, Dumbbell } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const EXERCISES: Record<string, Record<string, any[]>> = {
  emagrecimento: {
    iniciante: [
      { name: 'Polichinelos (Aquecimento)', reps: '45 seg', sets: 1 },
      { name: 'Agachamento Livre', reps: '30 seg ativos / 30 seg descanso', sets: 3 },
      { name: 'Burpees Adaptados (sem salto)', reps: '30 seg ativos / 30 seg descanso', sets: 3 },
      { name: 'Mountain Climbers Devagar', reps: '30 seg ativos / 30 seg descanso', sets: 3 },
      { name: 'Prancha Abdominal (Joelhos no Chão)', reps: '30 seg', sets: 3 },
    ],
    intermediario: [
      { name: 'Polichinelos (Aquecimento)', reps: '1 min', sets: 1 },
      { name: 'Agachamento com Salto', reps: '45 seg ativos / 15 seg descanso', sets: 4 },
      { name: 'Burpees Padrão', reps: '45 seg ativos / 15 seg descanso', sets: 4 },
      { name: 'Mountain Climbers Rápido', reps: '45 seg ativos / 15 seg descanso', sets: 4 },
      { name: 'Prancha Abdominal Plena', reps: '1 min', sets: 3 },
    ],
    avancado: [
      { name: 'Burpees (Aquecimento)', reps: '1 min', sets: 1 },
      { name: 'Agachamento com Salto + Isometria', reps: '50 seg ativos / 10 seg descanso', sets: 5 },
      { name: 'Sprawls', reps: '50 seg ativos / 10 seg descanso', sets: 5 },
      { name: 'Mountain Climbers Cruzado', reps: '50 seg ativos / 10 seg descanso', sets: 5 },
      { name: 'Prancha com Toque no Ombro', reps: '1 min', sets: 4 },
    ]
  },
  hipertrofia: {
    iniciante: [
      { name: 'Supino Máquina ou Flexão Apoio', reps: '12 a 15 reps', sets: 3 },
      { name: 'Supino Inclinado Máquina', reps: '12 a 15 reps', sets: 3 },
      { name: 'Desenvolvimento Máquina', reps: '12 reps', sets: 3 },
      { name: 'Elevação Lateral Halteres Leves', reps: '15 reps', sets: 3 },
      { name: 'Tríceps Polia (Corda)', reps: '15 reps', sets: 3 },
    ],
    intermediario: [
      { name: 'Supino Reto com Barra', reps: '8 a 10 reps', sets: 4 },
      { name: 'Supino Inclinado com Halteres', reps: '10 a 12 reps', sets: 3 },
      { name: 'Desenvolvimento Militar', reps: '8 a 10 reps', sets: 4 },
      { name: 'Elevação Lateral', reps: '12 a 15 reps', sets: 4 },
      { name: 'Tríceps Polia (Corda)', reps: '10 a 12 reps', sets: 3 },
      { name: 'Tríceps Testa', reps: '10 a 12 reps', sets: 3 },
    ],
    avancado: [
      { name: 'Supino Reto com Barra (Carga Alta)', reps: '5 a 8 reps', sets: 5 },
      { name: 'Supino Inclinado com Halteres + Drop-set', reps: '8 a 10 reps', sets: 4 },
      { name: 'Crucifixo no Crossover', reps: '12 a 15 reps', sets: 4 },
      { name: 'Desenvolvimento com Halteres Pesado', reps: '8 a 10 reps', sets: 4 },
      { name: 'Elevação Lateral na Polia', reps: '12 reps + Isometria', sets: 4 },
      { name: 'Tríceps Corda (Rest-Pause)', reps: 'Até a falha', sets: 4 },
    ]
  }
};

export default function Workouts() {
  const { goal, level, setLevel } = useAppContext();
  const isEmagrecimento = goal === 'emagrecimento';
  const currentExercises = EXERCISES[goal || 'emagrecimento'][level || 'iniciante'];

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <header className="mb-10">
        <h1 className="font-bebas text-4xl md:text-5xl text-white">
          SEU TREINO <span className="text-fire2">DE HOJE</span>
        </h1>
        <p className="text-white/60 font-light mt-2">
          {isEmagrecimento 
            ? 'Treinos focados em elevar o gasto calórico e definição muscular.'
            : 'Foco em recrutamento motor, sobrecarga progressiva e construção de massa magra.'}
        </p>
      </header>

      {/* Video Highlight */}
      <div className="relative w-full aspect-video bg-dark3 border border-white/10 rounded-2xl overflow-hidden mb-8 group cursor-pointer flex justify-center items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity" 
             style={{ backgroundImage: isEmagrecimento ? 'url(https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=1200)' : 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200)' }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark2 via-transparent to-transparent"></div>
        
        <div className="w-20 h-20 bg-fire/90 backdrop-blur rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform shadow-lg shadow-fire/50">
          <Play className="w-8 h-8 text-white fill-white ml-1" />
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          <div>
            <div className="font-condensed font-bold tracking-widest text-fire2 uppercase mb-1">
              {isEmagrecimento ? 'HIIT Funcional' : 'Treino A (Força Base)'}
            </div>
            <h3 className="font-bebas text-3xl">
              {isEmagrecimento ? 'QUEIMA EXTREMA FULL BODY' : 'PEITO, OMBRO & TRÍCEPS'}
            </h3>
          </div>
          <div className="hidden md:flex gap-4">
            <div className="flex items-center gap-2 bg-dark/60 backdrop-blur px-3 py-1.5 rounded text-sm font-condensed">
              <Clock className="w-4 h-4 text-gold" /> {isEmagrecimento ? '25 Min' : '45 Min'}
            </div>
            <div className="flex items-center gap-2 bg-dark/60 backdrop-blur px-3 py-1.5 rounded text-sm font-condensed">
              <Flame className="w-4 h-4 text-fire" /> {isEmagrecimento ? 'Alta Intensidade' : 'Hipertrofia'}
            </div>
          </div>
        </div>
      </div>

      {/* Routine Detail */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <h2 className="font-condensed font-bold text-xl tracking-wider uppercase text-white">Rotina Detalhada</h2>
          
          <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl w-full md:w-auto">
            {['iniciante', 'intermediario', 'avancado'].map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-sm font-condensed tracking-wider uppercase transition-colors ${
                  level === l 
                    ? 'bg-fire/20 text-fire2 font-bold' 
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          {currentExercises?.map((ex, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className={`w-10 h-10 bg-dark3 rounded flex items-center justify-center font-bebas text-xl ${isEmagrecimento ? 'text-fire/70' : 'text-gold2/70'}`}>
                  {idx + 1}
                </div>
                <div>
                  <div className="font-bold text-lg">{ex.name}</div>
                  <div className="text-white/50 text-sm font-condensed uppercase tracking-wider">{ex.sets} Séries // {ex.reps}</div>
                </div>
              </div>
              <Dumbbell className="w-5 h-5 text-white/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
