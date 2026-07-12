import { useState } from "react";
import type { User } from "../schemas/User";
import { authRegister } from "../api/api.register";
import { useNavigate } from "react-router-dom";
export function useRegister(){
  const nav = useNavigate();
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(false);
   
   const register = async (fd: User) => {
      setLoading(true);
           setError(null);
      try{
         
           const data = await authRegister(fd);
           nav('/Login')
           return data;
      } catch (err){
        console.error("Error creating user", err);
      } finally {
        setLoading(false);
      }
   }
   return {loading, error, register};
}