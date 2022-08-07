import { ReactNode } from 'react';
import styled from 'styled-components';

export default function Form({ children }: { children: ReactNode }) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();
  return <StForm onSubmit={onSubmit}>{children}</StForm>;
}

const StForm = styled.form`
  display: flex;
  flex-direction: column;
`;
