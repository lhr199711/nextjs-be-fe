import { get, post } from './request';
import { BookItem, BookListSearchData, BookListResult } from '@/types/book';

const bookApi = {
  getBookList: (params: BookListSearchData) => get<BookListResult>(`/book/list`, { params }),
  updateBook: (data: BookItem) => post(`/book/update`, data)
};

export default bookApi;
