import { get, post, delete2 } from './request';
import { BookItem, BookListSearchData, BookListResult } from '@/types/book';

const bookApi = {
  getBookList: (params: BookListSearchData) => get<BookListResult>(`/book/list`, { params }),
  updateBook: (data: BookItem) => post(`/book/update`, data),
  getBookDetail: (id: string) => get<BookItem>(`/book/detail/${id}`),
  deleteBook: (id: string) => delete2<BookItem>(`/book/delete/${id}`)
};

export default bookApi;
