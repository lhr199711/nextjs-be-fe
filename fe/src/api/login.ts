import { get, post, delete2 } from './request';
import { LoginRes, UserItem } from '@/types/user';

const loginApi = {
  userRegister: (data: UserItem) => post(`/user/register`, data),
  login: (data: UserItem) => post<LoginRes, UserItem>(`/user/login`, data)
};

export default loginApi;
