import { useState } from "react"
import { useLogout } from "../hooks/useLogout"


export default function Menu(){
    const {logout, loading ,error} = useLogout();
    const handleLogout = async () => {
        try{
                await logout(); 
                
        } catch (error){
            console.error("User can not log out");
        }
    }
    return (
        <>
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
        </>
    )
}