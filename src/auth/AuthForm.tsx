import Form from 'common/components/Form';
import FormItem from 'common/components/FormItem';

interface AuthFormProps {
  email: {
    value: string;
    onChange: (newValue: string) => void;
  };
  password: {
    value: string;
    onChange: (newValue: string) => void;
  };
}

export default function AuthForm(props: AuthFormProps) {
  const { email, password } = props;
  return (
    <Form>
      <FormItem label="이메일" value={email.value} onChange={email.onChange} />
      <FormItem label="비밀번호" value={password.value} onChange={password.onChange} />
      <button>완료</button>
    </Form>
  );
}
