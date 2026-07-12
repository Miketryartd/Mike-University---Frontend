import { useNavigate } from "react-router-dom";
import { authLogout } from "../api/api.logout"
import { useState } from "react";
import { useAuth } from "../context/auth";



export function useLogout(){
    
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const {setUser} = useAuth();
     const nav = useNavigate();
     const logout = async () => {
          setLoading(true);
            setError(null);
        try{
          
          const res = await authLogout();
          if (res) {
            setUser(null);
             nav('/');
          }

           
        } catch (err){
          
             const errorMessage = err instanceof Error ? err.message : "Logout failed";
            setError(errorMessage);
            console.error("Error logging out user:", err);
            
         
            setUser(null);
        } finally {
            setLoading(false);
        }
     };

     return {logout, loading, error};
}