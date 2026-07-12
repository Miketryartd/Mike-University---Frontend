import type { User } from "../schemas/User";
import axios from "axios";
import { api } from "./client";
export const authRegister = async (fd: User) => {
    try{
      
       await api.get('/sanctum/csrf-cookie');
       const response = await api.post('/api/register', fd);
       return response.data;
    } catch (err){
        console.error("Error creating account", err);
        if (axios.isAxiosError(err)){
            const msg = err.response?.data?.message || err.message;
            throw new Error(msg);
        }
        throw err;
    }
}