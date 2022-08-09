import Input from './Input';
import styled from 'styled-components';

interface FormItemProps {
  label: string;
  value: string | undefined;
  onChange: (newValue: string) => void;
  width?: string;
}

export default function FormItem(props: FormItemProps) {
  const { label, value, onChange, width = '100%' } = props;
  return (
    <Styled.FormItem width={width}>
      <div>{label}</div>
      <Input value={value} onChange={onChange} />
    </Styled.FormItem>
  );
}

const Styled = {
  FormItem: styled.div<{ width: string }>`
    width: ${(props) => props.width};
  `,
};
