import React, { useEffect } from 'react';
import { Target, Info, Flame, Droplet, Coffee, Utensils, Moon, Save } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Nutrition() {
  const { goal, targetMacros, setTargetMacros, consumedMacros, setConsumedMacros } = useAppContext();
  const isEmagrecimento = goal === 'emagrecimento';

  // Initialize defaults if empty or adapt slightly to goal. Optionally, user edits override.
  useEffect(() => {
    if (goal === 'emagrecimento' && targetMacros.protein === 160 && targetMacros.carbs === 120 && targetMacros.fats === 80) {
      // already set to emagrecimento defaults
    } else if (goal === 'hipertrofia' && targetMacros.protein === 160 && targetMacros.carbs === 120 && targetMacros.fats === 80) {
      setTargetMacros({ protein: 180, carbs: 350, fats: 75 });
    }
  }, [goal]);

  const calories = (targetMacros.protein * 4) + (targetMacros.carbs * 4) + (targetMacros.fats * 9);

  const chartData = [
    { name: 'Proteínas (g)', Consumido: consumedMacros.protein, Meta: targetMacros.protein },
    { name: 'Carbos (g)', Consumido: consumedMacros.carbs, Meta: targetMacros.carbs },
    { name: 'Gorduras (g)', Consumido: consumedMacros.fats, Meta: targetMacros.fats },
  ];

  const handleConsumedChange = (field: keyof typeof consumedMacros, value: string) => {
    setConsumedMacros({ ...consumedMacros, [field]: Number(value) || 0 });
  };

  const handleTargetChange = (field: keyof typeof targetMacros, value: string) => {
    setTargetMacros({ ...targetMacros, [field]: Number(value) || 0 });
  };

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <header className="mb-10">
        <h1 className="font-bebas text-4xl md:text-5xl text-white">
          CARDÁPIO <span className="text-green-500">INTELIGENTE</span>
        </h1>
        <p className="text-white/60 font-light mt-2 max-w-2xl">
          {isEmagrecimento 
            ? 'Plano calculado para déficit calórico, preservando sua massa muscular enquanto seu corpo usa a gordura estocada como fonte primária de energia.'
            : 'Plano em superávit leve para construção de músculos fortes. Alta proteína, carboidratos organizados em momentos chave do seu treino.'}
        </p>
      </header>

      {/* Macros Overview */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-center">
          <div className="font-condensed font-bold text-xs tracking-[0.2em] text-white/50 uppercase mb-2">Meta Diária</div>
          <div className="font-bebas text-4xl text-fire2">{calories} <span className="text-lg text-white/40">Kcal</span></div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-center border-b-4 border-b-green-500/50">
          <div className="font-condensed font-bold text-xs tracking-[0.2em] text-white/50 uppercase mb-2">Proteínas</div>
          <div className="font-bebas text-3xl text-white">{targetMacros.protein}g</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-center border-b-4 border-b-gold2/50">
          <div className="font-condensed font-bold text-xs tracking-[0.2em] text-white/50 uppercase mb-2">Carboidratos</div>
          <div className="font-bebas text-3xl text-white">{targetMacros.carbs}g</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-center border-b-4 border-b-purple-500/50">
          <div className="font-condensed font-bold text-xs tracking-[0.2em] text-white/50 uppercase mb-2">Gorduras</div>
          <div className="font-bebas text-3xl text-white">{targetMacros.fats}g</div>
        </div>
      </div>

      {/* Macros Tracker */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-10">
        <h2 className="font-condensed font-bold text-xl tracking-wider uppercase text-white mb-6">Controle de Macros</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Entradas Meta */}
              <div className="space-y-4">
                <div className="font-condensed tracking-wider uppercase text-white/70 text-sm mb-2 border-b border-white/10 pb-2">Editar Meta (g)</div>
                <div>
                  <label className="text-xs text-green-500 mb-1 block">Prot</label>
                  <input type="number" className="w-full bg-dark3 border border-white/10 rounded p-2 text-white" value={targetMacros.protein} onChange={(e) => handleTargetChange('protein', e.target.value)} />
                </div>
                <div>
                  <label className="text-xs text-gold2 mb-1 block">Carb</label>
                  <input type="number" className="w-full bg-dark3 border border-white/10 rounded p-2 text-white" value={targetMacros.carbs} onChange={(e) => handleTargetChange('carbs', e.target.value)} />
                </div>
                <div>
                  <label className="text-xs text-purple-500 mb-1 block">Gord</label>
                  <input type="number" className="w-full bg-dark3 border border-white/10 rounded p-2 text-white" value={targetMacros.fats} onChange={(e) => handleTargetChange('fats', e.target.value)} />
                </div>
              </div>

              {/* Entradas Consumo */}
              <div className="space-y-4">
                <div className="font-condensed tracking-wider uppercase text-white/70 text-sm mb-2 border-b border-white/10 pb-2">Registrar Consumo (g)</div>
                <div>
                  <label className="text-xs text-green-500 mb-1 block">Prot Consumido</label>
                  <input type="number" className="w-full bg-dark3 border border-white/20 rounded p-2 text-white focus:border-green-500 outline-none" value={consumedMacros.protein || ''} onChange={(e) => handleConsumedChange('protein', e.target.value)} placeholder="0" />
                </div>
                <div>
                  <label className="text-xs text-gold2 mb-1 block">Carb Consumido</label>
                  <input type="number" className="w-full bg-dark3 border border-white/20 rounded p-2 text-white focus:border-gold2 outline-none" value={consumedMacros.carbs || ''} onChange={(e) => handleConsumedChange('carbs', e.target.value)} placeholder="0" />
                </div>
                <div>
                  <label className="text-xs text-purple-500 mb-1 block">Gord Consumida</label>
                  <input type="number" className="w-full bg-dark3 border border-white/20 rounded p-2 text-white focus:border-purple-500 outline-none" value={consumedMacros.fats || ''} onChange={(e) => handleConsumedChange('fats', e.target.value)} placeholder="0" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: '#ffffff10' }} 
                  contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ fontSize: '14px' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', opacity: 0.8 }} />
                <Bar dataKey="Consumido" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={40} />
                <Bar dataKey="Meta" fill="#ffffff20" radius={[4, 4, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex gap-4 items-start mb-10 text-blue-400">
        <Droplet className="w-6 h-6 shrink-0 mt-0.5" />
        <div>
          <div className="font-bold">Lembrete de Hidratação</div>
          <div className="text-sm text-blue-200/70">Mantenha sua garrafa de água ao lado. Beba pelo menos 3L de água espalhados pelo dia.</div>
        </div>
      </div>

      {/* Meals */}
      <div>
        <h2 className="font-condensed font-bold text-xl tracking-wider uppercase text-white mb-6">Refeições Base</h2>

        <div className="space-y-6">
          {/* Café da manhã */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <Coffee className="w-6 h-6 text-gold" />
                <h3 className="font-bebas text-2xl tracking-wide">Café da Manhã</h3>
              </div>
            </div>
            {isEmagrecimento ? (
              <p className="text-white/70 leading-relaxed text-sm">
                3 ovos mexidos inteiros.<br/>
                1 fatia de pão integral ou 100g de mamão.<br/>
                Café preto s/ açúcar à vontade.
              </p>
            ) : (
              <p className="text-white/70 leading-relaxed text-sm">
                4 ovos inteiros mexidos.<br/>
                2 fatias de pão integral com geléia.<br/>
                Vitamina de banana (1 banana, 30g aveia, 200ml leite integral).
              </p>
            )}
          </div>

          {/* Almoço */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <Utensils className="w-6 h-6 text-green-500" />
                <h3 className="font-bebas text-2xl tracking-wide">Almoço</h3>
              </div>
            </div>
            {isEmagrecimento ? (
              <p className="text-white/70 leading-relaxed text-sm">
                150g de peito de frango grelhado ou patinho.<br/>
                100g de arroz (branco ou integral) ou batata inglesa.<br/>
                Salada verde crua com muito volume (alface, rúcula, espinafre). Azeite p/ temperar (1 colher de chá).
              </p>
            ) : (
              <p className="text-white/70 leading-relaxed text-sm">
                180g de carne magra (frango, patinho).<br/>
                250g de arroz branco.<br/>
                100g de feijão.<br/>
                Salada e vegetais cozidos à vontade.
              </p>
            )}
          </div>

          {/* Jantar */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <Moon className="w-6 h-6 text-blue-400" />
                <h3 className="font-bebas text-2xl tracking-wide">Jantar</h3>
              </div>
            </div>
            {isEmagrecimento ? (
              <p className="text-white/70 leading-relaxed text-sm">
                150g de peixe (tilápia) ou frango.<br/>
                Vegetais no vapor (brócolis, couve-flor, cenoura). Sem carbos densos nesta refeição se treinou cedo.
              </p>
            ) : (
              <p className="text-white/70 leading-relaxed text-sm">
                180g de carne magra.<br/>
                200g de macarrão com molho de tomate natural ou batata doce.<br/>
                Salada verde.
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
