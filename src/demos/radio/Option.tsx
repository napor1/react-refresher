import { PropsWithChildren, useContext } from "react";
import { RadioGroupContext, RadioOptionContext } from "./contexts";

interface Props {
  value: string;
  icon?: string;
  isPopular?: boolean;
}
export function Option({
  value,
  icon,
  isPopular,
  children,
}: PropsWithChildren<Props>) {
  const { name, selectedValue, onChange } = useContext(RadioGroupContext);
  const isSelected = selectedValue === value;

  return (
    <label style={isPopular ? { border: "1px dashed red" } : undefined}>
      {icon}
      <input
        type="radio"
        value={value}
        name={name}
        checked={isSelected}
        onChange={() => {
          if (onChange) {
            onChange(value);
          }
        }}
      />
      <RadioOptionContext.Provider value={{ selected: isSelected }}>
        {children}
        {isPopular ? <strong>🔥</strong> : null}
      </RadioOptionContext.Provider>
    </label>
  );
}
