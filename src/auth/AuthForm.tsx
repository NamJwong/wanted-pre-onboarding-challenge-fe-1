import Form from 'common/components/Form';
import FormItem from 'common/components/FormItem';
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
}

export default function AuthForm(props: AuthFormProps) {
  const { email, password } = props;
  return (
    <Form>
      <FormItem label="이메일" value={email.value} onChange={email.onChange} width="150px" />
      {email.isValid || <StErrorMessage>{email.errorMessage}</StErrorMessage>}
      <FormItem
        label="비밀번호"
        value={password.value}
        onChange={password.onChange}
        width="150px"
      />
      {password.isValid || <StErrorMessage>{password.errorMessage}</StErrorMessage>}
      <StButton>완료</StButton>
    </Form>
  );
}

const StButton = styled.button`
  margin-top: 10px;
  width: 150px;
`;

const StErrorMessage = styled.div`
  color: red;
`;
