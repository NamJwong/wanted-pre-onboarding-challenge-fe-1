import { useMutation } from '@tanstack/react-query';
import AuthForm from 'auth/AuthForm';
import { StTitle } from 'auth/style';
import useInput from 'common/hooks/useInput';
import useToken from 'common/hooks/useToken';
import { postJoin } from 'common/services/auth';
import { useNavigate } from 'react-router-dom';

export default function Join() {
  const emailReg = /^(.+)@(.+)\.(.+)/;
  const { value: email, onChange: onChangeEmail, isValid: isValidEmail } = useInput('', emailReg);
  const passwordReg = /.{8,}/;
  const {
    value: password,
    onChange: onChangePassword,
    isValid: isValidPassword,
  } = useInput('', passwordReg);
  const { saveToken } = useToken();
  const navigate = useNavigate();

  // 회원가입 실패 에러 처리 해야 함.
  const { mutate, isLoading } = useMutation(() => postJoin(email, password), {
    onSuccess: async (token) => {
      saveToken(token);
      navigate('/');
    },
  });

  return (
    <div>
      <StTitle>회원가입</StTitle>
      <AuthForm
        email={{
          value: email,
          onChange: onChangeEmail,
          errorMessage: '이메일 주소가 올바르지 않은 형식입니다.',
          isValid: isValidEmail,
        }}
        password={{
          value: password,
          onChange: onChangePassword,
          errorMessage: '비밀번호는 8자 이상이어야 합니다.',
          isValid: isValidPassword,
        }}
        submit={{ onSubmit: mutate, isLoading: isLoading }}
      />
    </div>
  );
}
