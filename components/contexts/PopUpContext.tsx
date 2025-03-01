import React, { createContext, useContext, useState, ReactNode } from "react";
import { is } from "date-fns/locale";

interface PopupContextType {
  isMonthYearOpen: boolean;
  toggleMonthYear: () => void;
  closeAllPopups: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isMonthYearOpen, setIsMonthYearOpen] = useState(false);
  const toggleMonthYear = () => setIsMonthYearOpen((prev) => !prev);

  const closeAllPopups = () => {
    setIsMonthYearOpen(false);
  };

  return (
    <PopupContext.Provider
      value={{
        isMonthYearOpen,
        toggleMonthYear,
        closeAllPopups,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
