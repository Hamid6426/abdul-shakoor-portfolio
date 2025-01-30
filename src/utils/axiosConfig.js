import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Adjust the base URL as needed
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    console.log('Request Interceptor: Adding token to headers', token); // Log token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Request Config:', config); // Log request config
    return config;
  },
  (error) => {
    console.error('Request Interceptor Error:', error); // Log request interceptor error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     console.log('Response:', response); // Log response
//     return response;
//   },
//   (error) => {
//     console.error('Response Interceptor Error:', error); // Log response interceptor error
//     if (error.response && error.response.data && error.response.data.redirectTo) {
//       console.log('Redirecting to:', error.response.data.redirectTo); // Log redirection
//       window.location.href = error.response.data.redirectTo;
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
