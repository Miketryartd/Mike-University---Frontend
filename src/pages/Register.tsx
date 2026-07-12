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
     const [showPassword, setShowPassword] = useState<boolean>(false);
      const [isCapsLockOn, setIsCapsLockOn] = useState<boolean>(false);
     const handleRegister = async (e: React.FormEvent<HTMLFormElement>): Promise<User | void> => {
        e.preventDefault();
        try{
          const fd: User = {name, email, password};
           setName("");
          setEmail("");
          setPassword("");
          await register(fd);
         
          return fd;
        } catch (err){
            console.error(err);
        }
     }

      const handleCheckCapsLock = (e: React.KeyboardEvent<HTMLInputElement>): void => {
   
    const capsState = e.nativeEvent.getModifierState('CapsLock');
    setIsCapsLockOn(capsState);
  };

   const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

   
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
              <div className="relative">
              <input
                onKeyDown={handleCheckCapsLock}
                onKeyUp={handleCheckCapsLock}
                className="border-b w-full border-t-none border-slate-800/40 outline-none text-black p-3"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {isCapsLockOn && (
                <p className=" p-2 text-red-400">Caps Lock On</p>
              )}
              <button
                onClick={handlePasswordVisibility}
                className="absolute cursor-pointer transition right-3 top-1/2 transform -translate-y-1/1 text-gray-500 hover:text-gray-700 "
                type="button"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                    <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                    <path d="M3 3l18 18" />
                  </svg>
                )}
              </button>
            </div>
                <button className="bg-red-400 text-white transition hover:bg-red-600 rounded-md cursor-pointer p-2" type="submit">Create account</button>
                <p>Already have an account? <Link className="hover:underline text-red-400 hover:text-red-600" to="/Login">Login here.</Link></p>
            </form>
           </div>

        </div>
        </>
    )
}