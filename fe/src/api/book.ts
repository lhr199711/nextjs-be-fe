import axios from './request';

const bookApi = {
  getBookList: () => axios.get(`/books`)
};

export default bookApi;
