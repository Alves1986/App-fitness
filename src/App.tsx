import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Dumbbell, Brain, Check, X, Star, ShieldCheck, 
  ChevronDown, Calendar, Pill, BookOpen, Utensils, Zap, Play, CheckCircle2, FlaskConical, Salad, AlertOctagon
} from 'lucide-react';

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

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import { AppProvider } from './context/AppContext';
import Onboarding from './pages/Onboarding';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';
import Nutrition from './pages/Nutrition';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="workouts" element={<Workouts />} />
            <Route path="nutrition" element={<Nutrition />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}
