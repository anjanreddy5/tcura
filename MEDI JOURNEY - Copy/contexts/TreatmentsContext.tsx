import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Treatment {
  id: string;
  name: string;
  description: string;
  price: number;
  savings: string;
  color: string;
}

interface TreatmentsContextType {
  treatments: Treatment[];
  addTreatment: (treatment: Treatment) => void;
  removeTreatment: (id: string) => void;
  toggleTreatment: (treatment: Treatment) => void;
  isTreatmentAdded: (id: string) => boolean;
  getTotalPrice: () => number;
  getTotalSavings: () => number;
}

const TreatmentsContext = createContext<TreatmentsContextType | undefined>(undefined);

export function TreatmentsProvider({ children }: { children: ReactNode }) {
  const [treatments, setTreatments] = useState<Treatment[]>([]);

  const addTreatment = (treatment: Treatment) => {
    setTreatments(prev => {
      // Check if treatment already exists
      if (prev.find(t => t.id === treatment.id)) {
        return prev;
      }
      return [...prev, treatment];
    });
  };

  const removeTreatment = (id: string) => {
    setTreatments(prev => prev.filter(t => t.id !== id));
  };

  const toggleTreatment = (treatment: Treatment) => {
    setTreatments(prev => {
      const exists = prev.find(t => t.id === treatment.id);
      if (exists) {
        return prev.filter(t => t.id !== treatment.id);
      }
      return [...prev, treatment];
    });
  };

  const isTreatmentAdded = (id: string) => {
    return treatments.some(t => t.id === id);
  };

  const getTotalPrice = () => {
    return treatments.reduce((sum, treatment) => sum + treatment.price, 0);
  };

  const getTotalSavings = () => {
    // Assuming average 75% savings
    return treatments.reduce((sum, treatment) => {
      const originalPrice = treatment.price / 0.25; // If current is 25% of original
      const savings = originalPrice - treatment.price;
      return sum + savings;
    }, 0);
  };

  return (
    <TreatmentsContext.Provider
      value={{
        treatments,
        addTreatment,
        removeTreatment,
        toggleTreatment,
        isTreatmentAdded,
        getTotalPrice,
        getTotalSavings,
      }}
    >
      {children}
    </TreatmentsContext.Provider>
  );
}

export function useTreatments() {
  const context = useContext(TreatmentsContext);
  if (!context) {
    throw new Error('useTreatments must be used within TreatmentsProvider');
  }
  return context;
}
