export interface BookItem {
  _id?: string; // mongo数据库的id
  name: string;
  author: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  cover: string; // 封面
}

export interface BookListSearchData {
  name: string;
  author: string;
}
