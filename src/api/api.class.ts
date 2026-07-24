import axios from "axios";
import type { Class } from "../schemas/Class"
import { api } from "./client";

export const fetchClass = async (Class: Class) => {
   try{

    const res = await api.post('/api/create-class', Class);
    const nd = res.data.class || res.data;
    return nd;
   } catch (err){
     console.error("Error creating announcement", err);
       if (axios.isAxiosError(err)){
          const msg = err.response?.data?.message || err.message;
            throw new Error(msg);
    }
    throw err;
   }
};

export const getClasses = async () => {
  try{
    const res = await api.get("/api/classes");
    const ud = res.data.classes.data || res.data;
    return ud;
  } catch (err){
      console.error("Error fetching announcement", err);
       if (axios.isAxiosError(err)){
          const msg = err.response?.data?.message || err.message;
            throw new Error(msg);
    }
    throw err;
  }
}

export const jClass = async (code: string) => {
  try{
    const res = await api.post("/api/join-class", code);
    const ud = res.data.class || res.data;
    return ud;
  } catch (err){
     console.error("Error Authenticating user", err);
    if (axios.isAxiosError(err)){
          const msg = err.response?.data?.message || err.message;
            throw new Error(msg);
    }
    throw err;  
  }
}