import { tokenState } from './../stores/auth';
import { useSetRecoilState } from 'recoil';

export default function useToken() {
  const setToken = useSetRecoilState(tokenState);

  const saveToken = (token: string) => {
    console.log('save');
    setToken(token);
    localStorage.setItem('token', token);
  };

  return { saveToken };
}
