import { useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import type { User } from "../schemas/User";
import { useNavigate } from "react-router-dom";
import logo_2 from "../assets/images/logo_2.png";
import { Link } from "react-router-dom";
export default function Login(){

    const {login, loading, error } = useLogin();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isCapsLockOn, setIsCapsLockOn] = useState<boolean>(false);
      const nav = useNavigate();
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<User | void> => {
        e.preventDefault();
        try{
           
         const fd: User = {email, password};
        const result = await login(fd);
        if (result){
             setEmail("");
            setPassword("");
            nav('/Dashboard', {replace: true});
           
        }
         
         return;
        } catch (err){
            console.error("Error logging in user", error);
        }
    }

   const handleCheckCapsLock = (e: React.KeyboardEvent<HTMLInputElement>): void => {
   
    const capsState = e.nativeEvent.getModifierState('CapsLock');
    setIsCapsLockOn(capsState);
  };
   
    return (
        <>
        <div className="min-h-screen bg-gray-100">
            <div>
                <img loading="lazy" className="p-5 h-25 w-50 object-cover rounded-md" src={logo_2}></img>
            </div>

           <div className="mt-20 flex items-center justify-center bg-gray-100">
         
             <form className="flex flex-col gap-4 bg-white p-8 w-96 rounded-md shadow-md" method="POST" onSubmit={handleLogin}>
                
    
                <input className="border-b border-t-none border-slate-800/40 outline-none text-black p-3" type="email" placeholder="Email" name="email" required onChange={(e) => setEmail(e.target.value)}></input>
                <input onKeyDown={handleCheckCapsLock} onKeyUp={handleCheckCapsLock} className="border-b border-t-none border-slate-800/40 outline-none text-black p-3" type="password" placeholder="Password" name="password"  onChange={(e) => setPassword(e.target.value)}required/>
                {isCapsLockOn && <p className=" p-2 text-red-400">Caps Lock On</p>}
                <button className="bg-red-400 text-white hover:bg-red-600 rounded-md cursor-pointer p-2" type="submit">Create account</button>
                <p>Don't have an account? <Link className="hover:underline text-red-400 transition hover:text-red-600" to="/Register">Register here.</Link></p>
            </form>
           </div>

        </div>
        </>
    )
}