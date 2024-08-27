import { createContext } from "react";

type RadioGroupContextType = {
  name: string;
  selectedValue: string;
  onChange?: (value: string) => void;
};
type RadioOptionContextType = {
  selected: boolean;
};

export const RadioGroupContext = createContext<RadioGroupContextType>({
  name: "",
  selectedValue: ""
});

export const RadioOptionContext = createContext<RadioOptionContextType>({
  selected: false,
});
