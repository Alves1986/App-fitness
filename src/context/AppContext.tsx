import React, { createContext, useContext, useState, ReactNode } from 'react';

type Goal = 'emagrecimento' | 'hipertrofia' | null;

export interface Macros {
  protein: number;
  carbs: number;
  fats: number;
}

interface AppState {
  goal: Goal;
  setGoal: (goal: Goal) => void;
  level: string;
  setLevel: (level: string) => void;
  currentDay: number;
  setCurrentDay: (day: number) => void;
  checkIns: Record<number, string>;
  addCheckIn: (day: number, feeling: string) => void;
  targetMacros: Macros;
  setTargetMacros: (macros: Macros) => void;
  consumedMacros: Macros;
  setConsumedMacros: (macros: Macros) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [goal, setGoal] = useState<Goal>(null);
  const [level, setLevel] = useState<string>('iniciante');
  const [currentDay, setCurrentDay] = useState(1);
  const [checkIns, setCheckIns] = useState<Record<number, string>>({});
  
  // Default macros can be updated when goal changes, but we'll set sensible defaults
  const [targetMacros, setTargetMacros] = useState<Macros>({ protein: 160, carbs: 120, fats: 80 });
  const [consumedMacros, setConsumedMacros] = useState<Macros>({ protein: 0, carbs: 0, fats: 0 });

  const addCheckIn = (day: number, feeling: string) => {
    setCheckIns(prev => ({ ...prev, [day]: feeling }));
  };

  return (
    <AppContext.Provider value={{ 
      goal, setGoal, level, setLevel, currentDay, setCurrentDay, checkIns, addCheckIn,
      targetMacros, setTargetMacros, consumedMacros, setConsumedMacros
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
