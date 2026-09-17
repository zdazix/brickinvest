import { createContext, useContext } from "react";

export type ConsultationContextValue = {
  closeConsultation: () => void;
  isConsultationOpen: boolean;
  openConsultation: () => void;
};

export const ConsultationContext =
  createContext<ConsultationContextValue | null>(null);

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error("useConsultation must be used inside ConsultationProvider");
  }
  return context;
};
