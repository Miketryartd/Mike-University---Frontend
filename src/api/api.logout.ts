import axios from "axios";
import { api } from "./client";

export const authLogout = async () => {
   
    try{
       await api.get('/sanctum/csrf-cookie');
       const res = await api.post('/api/logout');

       localStorage.removeItem('user_token');
       delete api.defaults.headers.common['Authorization'];
       return res;
    } catch (err){
        localStorage.removeItem('user_token');
        delete api.defaults.headers.common['Authorization'];
        if (axios.isAxiosError(err)){
             if (err.code === "ECONNABORTED" || err.code === "ETIMEDOUT") {
        console.error("Request timed out. Please try again.");
        return;
      }
        }
    }
}