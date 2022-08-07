import { ReactNode } from 'react';

export default function Form({ children }: { children: ReactNode }) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();
  return <form onSubmit={onSubmit}>{children}</form>;
}
