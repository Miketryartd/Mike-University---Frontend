
import type { User } from "../schemas/User";
import axios from "axios";
import { api } from "./client";
export const authLogin = async (fd: User) => {
  
 try{
   await api.get('/sanctum/csrf-cookie');
  const response = await api.post('/api/login', fd);
 const {token, user} = response.data;
 if (token){
  localStorage.setItem('user_token', token);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
 }
  return response.data;

 } catch (err){
    console.error("Error Authenticating user", err);
    if (axios.isAxiosError(err)){
          const msg = err.response?.data?.message || err.message;
            throw new Error(msg);
    }
    throw err;
 }
} 