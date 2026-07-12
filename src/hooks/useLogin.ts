import { useState } from "react";
import { authLogin } from "../api/api.login";
import type { User } from "../schemas/User";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
export function useLogin(){
  
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>();
 
    const login = async (fd: User) => {
          setLoading(true);
        setError(null);
       try{
      
        const data = await authLogin(fd);
    
       
        return data;
        
       } catch (err){
        console.error("Error logging in user", error);
       } finally {
        setLoading(false)
       }
    }
    return {login, loading, error};
}