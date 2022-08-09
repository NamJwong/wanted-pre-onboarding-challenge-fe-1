import Form from 'common/components/Form';
import FormItem from 'common/components/FormItem';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface AuthFormProps {
  email: {
    value: string;
    onChange: (newValue: string) => void;
    errorMessage?: string;
    isValid?: boolean;
  };
  password: {
    value: string;
    onChange: (newValue: string) => void;
    errorMessage?: string;
    isValid?: boolean;
  };
  submit: {
    onSubmit: () => void;
    isLoading: boolean;
  };
}

export default function AuthForm(props: AuthFormProps) {
  const { email, password, submit } = props;
  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    if (email.value && password.value) {
      if (email.errorMessage) {
        if (email.isValid && password.isValid) setDisabledButton(false);
        else setDisabledButton(true);
      } else setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [email, password]);

  return (
    <Form>
      <FormItem label="이메일" value={email.value} onChange={email.onChange} width="150px" />
      {email.errorMessage && !email.isValid && (
        <Styled.ErrorMessage>{email.errorMessage}</Styled.ErrorMessage>
      )}
      <FormItem
        label="비밀번호"
        value={password.value}
        onChange={password.onChange}
        width="150px"
      />
      {password.errorMessage && !password.isValid && (
        <Styled.ErrorMessage>{password.errorMessage}</Styled.ErrorMessage>
      )}
      <Styled.Button disabled={submit.isLoading && disabledButton} onClick={submit.onSubmit}>
        완료
      </Styled.Button>
    </Form>
  );
}

const Styled = {
  Button: styled.button`
    margin-top: 10px;
    width: 150px;
  `,
  ErrorMessage: styled.div`
    color: red;
  `,
};
