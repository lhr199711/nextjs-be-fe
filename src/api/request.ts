import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';

// 基础地址可以通过环境变量配置
// 在 .env.local 中配置：NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
const baseURL = '/api';

const service: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  withCredentials: true
});

// 请求拦截器：统一加 token 等
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器：统一处理后端返回格式
// 假设后端返回 { code, data, message }
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;

    // 如果后端有统一的 code 约定
    if (res && typeof res === 'object' && 'code' in res) {
      if (res.code === 0) {
        return res.data;
      }
      return Promise.reject(new Error(res.message || '请求失败'));
    }

    // 否则直接返回 data
    return res;
  },
  (error) => {
    // 这里可以接入 antd 的 message 提示等
    // message.error(error.response?.data?.message || error.message)
    return Promise.reject(error);
  }
);

// 封装常用方法，带上类型
export type ApiResponse<T> = {
  code: number;
  data: T;
  message?: string;
};

export function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  return service.get<T, T>(url, config);
}

export function post<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
  return service.post<T, T>(url, data, config);
}

export default service;
