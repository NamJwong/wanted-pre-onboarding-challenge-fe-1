import { API } from './base';

export const postJoin = async (email: string, password: string) => {
  const response = await API.post({
    url: '/users/create',
    data: { email: email, password: password },
  });
  return response.token;
};
