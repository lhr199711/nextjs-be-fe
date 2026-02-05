import axios from './request';
import { BookItem, BookListSearchData } from '@/types/book';

const bookApi = {
  getBookList: (params: BookListSearchData) => axios.get(`/list`, { params }),
  updateBook: (data: BookItem) => axios.post(`/book/update`, data)
};

export default bookApi;
