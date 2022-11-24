import axios from "axios";

//创建axios实例
const instance = axios.create({
  baseURL: "https://api.arcnftclub.com",
  timeout: 5000,
});
//请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//响应拦截器
instance.interceptors.response.use(
  (res) => {
    console.log("响应拦截器", res.data);
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
