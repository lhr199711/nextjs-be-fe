export interface UserItem {
  _id?: string; // mongo数据库的id
  name: string;
  password: string;
  password2?: string;
}
