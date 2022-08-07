import AuthForm from 'auth/AuthForm';
import { StTitle } from 'auth/style';
import useInput from 'common/hooks/useInput';

export default function Join() {
  const { value: email, onChange: onChangeEmail } = useInput('');
  const { value: password, onChange: onChangePassword } = useInput('');
  return (
    <div>
      <StTitle>회원가입</StTitle>
      <AuthForm
        email={{ value: email, onChange: onChangeEmail }}
        password={{ value: password, onChange: onChangePassword }}
      />
    </div>
  );
}
