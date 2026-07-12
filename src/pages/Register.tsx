import { useState } from "react"
import logo_2 from "../assets/images/logo_2.png";
import type { User } from "../schemas/User";
import { useRegister } from "../hooks/useRegister";
import { Link } from "react-router-dom";
export default function Register(){
    
     const {loading, error, register} = useRegister();
     const [name, setName] = useState<string>("");
     const [email, setEmail] = useState<string>("");
     const [password, setPassword] = useState<string>("");
     const handleRegister = async (e: React.FormEvent<HTMLFormElement>): Promise<User | void> => {
        e.preventDefault();
        try{
          const fd: User = {name, email, password};
          await register(fd);
          return fd;
        } catch (err){
            console.error(err);
        }
     }
    return (
        <>
        <div className="min-h-screen bg-gray-100">
            <div>
                <img loading="lazy" className="p-5 h-25 w-50 object-cover rounded-md" src={logo_2}></img>
            </div>

           <div className="mt-20 flex items-center justify-center bg-gray-100">
         
             <form className="flex flex-col gap-4 bg-white p-8 w-96 rounded-md shadow-md" method="POST" onSubmit={handleRegister}>
                
                <input className="border-b border-t-none border-slate-800/40 outline-none text-black p-3" type="text" placeholder="Full Name" name="name" required onChange={(e) => setName(e.target.value)}></input>
                <input className="border-b border-t-none border-slate-800/40 outline-none text-black p-3" type="email" placeholder="Email" name="email" required onChange={(e) => setEmail(e.target.value)}></input>
                <input className="border-b border-t-none border-slate-800/40 outline-none text-black p-3" type="password" placeholder="Password" name="password"  onChange={(e) => setPassword(e.target.value)}required></input>
                <button className="bg-red-400 text-white hover:bg-red-600 rounded-md cursor-pointer p-2" type="submit">Create account</button>
                <p>Already have an account? <Link className="hover:underline text-red-400 hover:text-red-600" to="/Login">Login here</Link></p>
            </form>
           </div>

        </div>
        </>
    )
}