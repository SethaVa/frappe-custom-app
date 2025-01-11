import { useEffect, useState } from "react";

const useDebounce = (initalValue) => {
  const [value, setValue] = useState(initalValue);
  const [debouncedValue, setDebouncedValue] = useState(initalValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return [debouncedValue, setValue];
};

export default useDebounce;
