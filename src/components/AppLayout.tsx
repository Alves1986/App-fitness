import React from 'react';
import { NavLink, Outlet, Navigate } from 'react-router-dom';
import { Home, Dumbbell, Utensils, Settings, Target } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function AppLayout() {
  const { goal } = useAppContext();

  if (!goal) {
    return <Navigate to="/onboarding" replace />;
  }

  const navItems = [
    { to: '/app', icon: Home, label: 'Início', exact: true },
    { to: '/app/workouts', icon: Dumbbell, label: 'Treinos' },
    { to: '/app/nutrition', icon: Utensils, label: 'Dieta' },
  ];

  return (
    <div className="min-h-screen bg-dark text-white font-sans flex flex-col md:flex-row">
      
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-dark2 border-r border-white/10 h-screen sticky top-0">
        <div className="p-6 pb-2 border-b border-white/10">
          <h2 className="font-bebas text-3xl text-fire2 tracking-widest">DESAFIO 20D</h2>
          <div className="flex items-center gap-2 mt-2 text-xs text-white/50 font-condensed uppercase">
            <Target className="w-4 h-4 text-gold2" /> 
            Objetivo: {goal === 'emagrecimento' ? 'Emagrecer' : 'Hipertrofia'}
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-lg font-condensed tracking-wider uppercase transition-colors ${
                  isActive 
                    ? 'bg-fire/10 text-fire2 border border-fire/20' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pb-20 md:pb-0 overflow-y-auto min-h-screen">
        <Outlet />
      </main>

      {/* Bottom Nav for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-dark2/90 backdrop-blur-lg border-t border-white/10 flex justify-around p-3 z-50">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.exact}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                isActive ? 'text-fire2' : 'text-white/50'
              }`
            }
          >
            <item.icon className="w-6 h-6" />
            <span className="text-[10px] uppercase font-condensed tracking-wider">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
