import { get, post, delete2 } from './request';
import { UserItem } from '@/types/user';

const loginApi = {
  userRegister: (data: UserItem) => post(`/user/register`, data)
};

export default loginApi;
