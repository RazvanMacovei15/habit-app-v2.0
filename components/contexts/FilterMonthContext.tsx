import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  startOfDay,
  isMonday,
  getMonth,
  getYear,
  getISOWeek,
  set,
} from "date-fns";

interface FilterMonthContextType {
  month: number;
  setMonth: (month: number) => void;
  year: number;
  setYear: (year: number) => void;
  firstMondayOfMonth: number;
}

const FilterMonthContext = createContext<FilterMonthContextType | undefined>(
  undefined
);

export const FilterMonthProvider = ({ children }: { children: ReactNode }) => {
  const today = new Date();

  const [month, setMonth] = useState(1);
  const [selectedYear, setSelectedYear] = useState(2025);
  const [firstMondayOfMonth, setFirstMondayOfMonth] = useState(1);

  const getFirstMonday = () => {
    for (let i = 1; i <= 7; i++) {
      let day = new Date(selectedYear, month, i);
      day.setHours(12, 0, 0, 0);
      if (isMonday(day)) {
        return i;
      }
    }
    throw new Error("No Monday found in the first week of the month");
  };

  useEffect(() => {
    const loadAssets = async () => {
      setMonth(getMonth(today));
      setSelectedYear(getYear(today));
      setFirstMondayOfMonth(getFirstMonday());
    };
    loadAssets();
  }, []);

  return (
    <FilterMonthContext.Provider
      value={{
        month: month,
        setMonth: setMonth,
        year: selectedYear,
        setYear: setSelectedYear,
        firstMondayOfMonth,
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
