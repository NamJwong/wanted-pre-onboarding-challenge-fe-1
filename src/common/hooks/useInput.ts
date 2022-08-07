import { useState } from 'react';

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const onChange = (newValue: string) => setValue(newValue);

  return { value, onChange };
}
