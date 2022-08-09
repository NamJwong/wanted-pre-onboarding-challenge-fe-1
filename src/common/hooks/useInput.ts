import { useEffect, useState } from 'react';

export default function useInput(initialValue: string, validReg?: RegExp) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);
  const onChange = (newValue: string) => setValue(newValue);

  useEffect(() => {
    setIsValid(true);
    if (validReg && value) {
      if (!validReg.test(value)) setIsValid(false);
    }
  }, [value]);

  return { value, onChange, isValid };
}
