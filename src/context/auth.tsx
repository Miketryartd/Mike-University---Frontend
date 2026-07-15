import { useState, type ReactNode } from "react";
import { createContext, useContext, useEffect } from "react";
import type { AuthContextType } from "../schemas/auth.context";
import { api } from "../api/client";
import type { User } from "../schemas/User";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(){
   const context = useContext(AuthContext);
   if (context === undefined){
      throw new Error("useAuth must be used with AutHpROVIDER");
   }
   return context;
}
export function AuthProvider({children}: {children: ReactNode}){

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getUser = async () => {
     try{
        const res = await api.get('/api/user');
          
        const ud = res.data.user || res.data;

        setUser(ud);
       
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

 const hasRole = (role: string | string[]): boolean => {
    if (!user || !user.role) return false;
    if (Array.isArray(role)) {
      return role.includes(user.role);
    }
    return user.role === role;
  };
    useEffect(() => {
      const initialize = async () => {
         await csrfHandShake();
         await getUser();
      }
        initialize();
    }, []);

  
   return(
      <AuthContext.Provider value={{user, loading, setUser, getUser, hasRole}}>
         {children}
      </AuthContext.Provider>
   )
};





