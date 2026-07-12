import axios from "axios";

export const api = axios.create({
    baseURL: `http://localhost:8000`,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        "X-API-KEY": import.meta.env.VITE_API_KEY || "123456"
    },
    withCredentials: true
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('user_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
   
      localStorage.removeItem('user_token');
      delete api.defaults.headers.common['Authorization'];
      
     
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/Login';
      }
    }
    return Promise.reject(error);
  }
);