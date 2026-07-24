import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useClass } from "../hooks/useClass";

export default function Join(){

    const [code, setCode] = useState<string>("");
    const {loading, error, joinClass} = useClass();
    const handleJoin = async () => {
        try{
            await joinClass(code);
        } catch (err){
            console.error("Error joining class", err);
        }
    }
    return (
        <>
        <div>
           
     <Navbar/>
     <Sidebar/>
            <div className="flex flex-row justify-center items-center items-center top-50 w-full relative">
                <input onChange={(e) => setCode(e.target.value)} type="text" name="class_code" placeholder="Class code"></input>
                <button className="absolute " onClick={handleJoin}>Join</button>
            </div>
        </div>
        </>
    )
}