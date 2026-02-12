export interface BookItem {
  _id?: string; // mongo数据库的id
  name: string;
  author: string;
  description: string;
  topic: string;
  what: string;
  how: string;
  think: string;
  why: string;
  createdAt: string;
  updatedAt: string;
}

export interface BookListSearchData {
  name?: string;
  topic?: string;
  current?: number;
  pageSize?: number;
}

export interface BookListResult {
  list: BookItem[];
  total: number;
}
