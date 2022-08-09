import styled from 'styled-components';

interface InputProps {
  value: string | undefined;
  onChange: (newValue: string) => void;
  width?: string;
}

export default function Input(props: InputProps) {
  const { value, onChange, width = '100%' } = props;
  return <Styled.Input value={value} onChange={(e) => onChange(e.target.value)} width={width} />;
}

const Styled = {
  Input: styled.input<{ width: string }>`
    width: ${(props) => props.width};
  `,
};
