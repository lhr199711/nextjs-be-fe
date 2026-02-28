export interface UserItem {
  _id?: string; // mongo数据库的id
  name: string;
  password: string;
  password2?: string;
}

export type UserStore = {
  name: string;
  setName?: (name: string) => void;
  getName?: () => string;
};

export type LoginRes = { token: string };
