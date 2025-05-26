import { useState } from "react";

export default function useInput() {
  const [value, setValue] = useState("");

  const handleValue = (e) => {
    setValue(e.target.value);
  };
  return [value, handleValue];
}
