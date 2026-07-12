import { useState } from "react"

import type { User } from "../schemas/User";
import { useRegister } from "../hooks/useRegister";
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
        <div>
            <form method="POST" onSubmit={handleRegister}>
                <input type="text" placeholder="Full Name" name="name" required onChange={(e) => setName(e.target.value)}></input>
                <input type="email" placeholder="Email" name="email" required onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="Password" name="password"  onChange={(e) => setPassword(e.target.value)}required></input>
                <button type="submit">Create account</button>
            </form>
        </div>
        </>
    )
}