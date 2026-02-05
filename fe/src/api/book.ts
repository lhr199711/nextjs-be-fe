import { get, post } from './request';
import { BookItem, BookListSearchData, BookListResult } from '@/types/book';

const bookApi = {
  getBookList: (params: BookListSearchData) => get<BookListResult>(`/book/list`, { params }),
  updateBook: (data: BookItem) => post(`/book/update`, data),
  getBookDetail: (id: string) => get<BookItem>(`/book/detail/${id}`)
};

export default bookApi;
