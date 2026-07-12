import axios from "axios";

import { api } from "./client";

export const searchQuery = async (query: string) => {
     try{
        const res = await api.get(`api/search?query=${encodeURIComponent(query)}`);
        return res.data;
     } catch (err){
       if (axios.isAxiosError(err)){
         const msg = err.response?.data?.message || err.message
         throw new Error(msg);
       }  

       throw err;
     }
}