import AuthForm from 'auth/AuthForm';
import useInput from 'common/hooks/useInput';

export default function Login() {
  const { value: email, onChange: onChangeEmail } = useInput('');
  const { value: password, onChange: onChangePassword } = useInput('');
  return (
    <div>
      <h1>로그인</h1>
      <AuthForm
        email={{ value: email, onChange: onChangeEmail }}
        password={{ value: password, onChange: onChangePassword }}
      />
    </div>
  );
}
