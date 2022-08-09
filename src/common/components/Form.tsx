import { ReactNode } from 'react';
import styled from 'styled-components';

export default function Form({ children }: { children: ReactNode }) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();
  return <Styled.Form onSubmit={onSubmit}>{children}</Styled.Form>;
}
const Styled = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
  `,
};
