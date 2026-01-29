import axios from './request';

const bookApi = {
  getBookList: (status?: number) => axios.get(`/pet/findByStatus?status=${status}`)
};

export default bookApi;
