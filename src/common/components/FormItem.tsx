import Input from './Input';

interface FormItemProps {
  label: string;
  value: string | undefined;
  onChange: (newValue: string) => void;
}

export default function FormItem(props: FormItemProps) {
  const { label, value, onChange } = props;
  return (
    <>
      <div>{label}</div>
      <Input value={value} onChange={onChange} />
    </>
  );
}
