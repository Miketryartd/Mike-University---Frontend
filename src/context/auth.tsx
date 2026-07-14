import { useState, type ReactNode } from "react";
import { createContext, useContext, useEffect } from "react";
import type { AuthContextType } from "../schemas/auth.context";
import { api } from "../api/client";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(){
   const context = useContext(AuthContext);
   if (context === undefined){
      throw new Error("useAuth must be used with AutHpROVIDER");
   }
   return context;
}
export function AuthProvider({children}: {children: ReactNode}){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getUser = async () => {
     try{
        const res = await api.get('/api/user');
   
        setUser(res.data);
       
     } catch (err){
        setUser(null);
        console.log("User is null", err);
     } finally {
        setLoading(false);
     }
    };

      const csrfHandShake = async () => {
    await api.get('/sanctum/csrf-cookie');
  };

    useEffect(() => {
      const initialize = async () => {
         await csrfHandShake();
         await getUser();
      }
        initialize();
    }, []);

  
   return(
      <AuthContext.Provider value={{user, loading, setUser, getUser}}>
         {children}
      </AuthContext.Provider>
   )
};





