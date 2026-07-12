import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import type { User } from "../schemas/User";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const {login, loading, error } = useLogin();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
      const nav = useNavigate();
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<User | void> => {
        e.preventDefault();
        try{
           
         const fd: User = {email, password};
        const result = await login(fd);
        if (result){
            nav('/Dashboard', {replace: true});
        }
         
         return;
        } catch (err){
            console.error("Error logging in user", error);
        }
    }
    return (
        <>
        <div>
            <form method="POST" onSubmit={handleLogin}>
                <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} required></input>
                <input type="password" name="password" required onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <button type="submit">Login</button>
            </form>
        </div>
        </>
    )
}