import AuthForm from 'auth/AuthForm';
import { StTitle } from 'auth/style';
import useInput from 'common/hooks/useInput';

export default function Join() {
  const emailReg = /^(.+)@(.+)\.(.+)/;
  const { value: email, onChange: onChangeEmail, isValid } = useInput('', emailReg);
  const { value: password, onChange: onChangePassword } = useInput('');
  return (
    <div>
      <StTitle>회원가입</StTitle>
      <AuthForm
        email={{
          value: email,
          onChange: onChangeEmail,
          errorMessage: '이메일 주소가 올바르지 않은 형식입니다.',
          isValid: isValid,
        }}
        password={{ value: password, onChange: onChangePassword }}
      />
    </div>
  );
}
