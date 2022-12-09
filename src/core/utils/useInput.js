import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const hanlder = (e) => {
    setValue(e.target.value);
  };

  return [value, hanlder];
};
