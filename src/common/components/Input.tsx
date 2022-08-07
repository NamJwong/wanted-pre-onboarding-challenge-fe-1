interface InputProps {
  value: string | undefined;
  onChange: (newValue: string) => void;
}

export default function Input(props: InputProps) {
  const { value, onChange } = props;
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}
