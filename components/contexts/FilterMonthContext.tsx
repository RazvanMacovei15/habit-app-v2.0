import { createContext, ReactNode, useContext, useState } from "react";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface FilterMonthContextType {
  defaultMonth: number;
  month: number;
  setMonth: (month: number) => void;
  selectedMonth: number;
  setSelectedMonth: (month: number) => void;
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}

const FilterMonthContext = createContext<FilterMonthContextType | undefined>(
  undefined
);

export const FilterMonthProvider = ({ children }: { children: ReactNode }) => {
  const today = new Date();

  const [month, setMonth] = useState(new Date().getMonth());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  return (
    <FilterMonthContext.Provider
      value={{
        defaultMonth: month,
        month: month,
        setMonth: setMonth,
        selectedMonth,
        setSelectedMonth,
        selectedYear,
        setSelectedYear,
      }}
    >
      {children}
    </FilterMonthContext.Provider>
  );
};

export const useFilterMonth = () => {
  const context = useContext(FilterMonthContext);
  if (!context) {
    throw new Error("useFilterMonth must be used within a FilterMonthProvider");
  }
  return context;
};
