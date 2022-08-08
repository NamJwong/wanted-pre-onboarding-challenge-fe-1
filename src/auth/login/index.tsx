import { useMutation } from '@tanstack/react-query';
import AuthForm from 'auth/AuthForm';
import { StTitle } from 'auth/style';
import useInput from 'common/hooks/useInput';
import useToken from 'common/hooks/useToken';
import { postLogin } from 'common/services/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { value: email, onChange: onChangeEmail } = useInput('');
  const { value: password, onChange: onChangePassword } = useInput('');
  const { saveToken } = useToken();
  const navigate = useNavigate();

  // 로그인 실패 에러 처리 해야 함.
  const { mutate, isLoading } = useMutation(() => postLogin(email, password), {
    onSuccess: async (token) => {
      saveToken(token);
      navigate('/');
    },
  });

  return (
    <div>
      <StTitle>로그인</StTitle>
      <AuthForm
        email={{ value: email, onChange: onChangeEmail }}
        password={{ value: password, onChange: onChangePassword }}
        submit={{ onSubmit: mutate, isLoading: isLoading }}
      />
    </div>
  );
}
