import AuthForm from 'auth/AuthForm';
import { StTitle } from 'auth/style';
import useInput from 'common/hooks/useInput';

export default function Login() {
  const { value: email, onChange: onChangeEmail } = useInput('');
  const { value: password, onChange: onChangePassword } = useInput('');
  return (
    <div>
      <StTitle>로그인</StTitle>
      <AuthForm
        email={{ value: email, onChange: onChangeEmail }}
        password={{ value: password, onChange: onChangePassword }}
      />
    </div>
  );
}
