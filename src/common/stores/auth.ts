import { atom } from 'recoil';

export const tokenState = atom<string>({
  key: 'token',
  default: '',
});

export const isAuthenticatedState = atom<boolean>({
  key: 'isAuthenticated',
  default: false,
});
