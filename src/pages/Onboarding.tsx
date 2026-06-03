import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, Target } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Onboarding() {
  const { setGoal, setLevel } = useAppContext();
  const navigate = useNavigate();

  const handleSelectGoal = (goal: 'emagrecimento' | 'hipertrofia') => {
    setGoal(goal);
    // Para simplificar, vou mandar diretor pro dashboard com nivel iniciante
    // mas poderia haver outro passo aqui se desejável.
    setLevel('iniciante');
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-dark text-white font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-fire/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-gold2/20 blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center relative z-10"
      >
        <div className="font-condensed font-bold text-xs tracking-[0.3em] uppercase text-fire2 mb-4">
          PERSONALIZAÇÃO DO APP
        </div>
        <h1 className="font-bebas text-5xl md:text-7xl mb-6">
          QUAL É O SEU <span className="text-fire2">OBJETIVO PRINCIPAL?</span>
        </h1>
        <p className="text-lg text-white/60 mb-12">
          Vamos ajustar seus treinos e seu cardápio de acordo com a sua meta.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <button 
            onClick={() => handleSelectGoal('emagrecimento')}
            className="bg-white/5 border border-white/10 hover:border-fire hover:bg-fire/5 rounded-2xl p-8 transition-all group flex flex-col items-center gap-4"
          >
            <div className="w-20 h-20 rounded-full bg-fire/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Target className="w-10 h-10 text-fire" />
            </div>
            <h3 className="font-bebas text-3xl text-white">EMAGRECIMENTO</h3>
            <p className="text-sm text-white/50">
              Foco em perda de gordura, definição muscular e acelerar o metabolismo.
            </p>
          </button>

          <button 
            onClick={() => handleSelectGoal('hipertrofia')}
            className="bg-white/5 border border-white/10 hover:border-gold2 hover:bg-gold2/5 rounded-2xl p-8 transition-all group flex flex-col items-center gap-4"
          >
            <div className="w-20 h-20 rounded-full bg-gold2/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Dumbbell className="w-10 h-10 text-gold2" />
            </div>
            <h3 className="font-bebas text-3xl text-white">GANHO DE MASSA (FITNESS)</h3>
            <p className="text-sm text-white/50">
              Foco em hipertrofia na academia, treinos de força e construção muscular.
            </p>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
