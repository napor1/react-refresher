import { PropsWithChildren } from "react";
import { useContextValue } from "./useContextValue";
import { RadioGroupContext } from "./contexts";
import { Option } from "./Option";
import { Details } from "./Details";

interface Props {
  name: string;
  onChange: (value: string) => void;
}

export function RadioGroup({
  name,
  onChange,
  children,
}: PropsWithChildren<Props>) {
  const contextValue = useContextValue({ name, onChange });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <RadioGroupContext.Provider value={contextValue}>
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
}

RadioGroup.Option = Option;
RadioGroup.Details = Details;