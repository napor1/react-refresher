import { useState } from "react";

interface Props {
  name: string;
  onChange: (value: string) => void;
}
export function useContextValue({name, onChange}: Props) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (value: string) => {
    setSelectedValue(value);
    if(onChange) {
      onChange(value)
    }
  }

  return {
    name,
    selectedValue,
    onChange: handleChange
  }
}