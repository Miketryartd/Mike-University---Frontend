import { useParams } from "react-router-dom"
import { useAuth } from "../context/auth";
import { useEffect, useState } from "react";

export default function Profile(){
    const {id} = useParams<{id: string}>();
    const [conid, setConid] = useState<number>();
  
    const {user} = useAuth();
    useEffect(() => {
       
 
        if (!id) {
            throw new Error("user id not found");
        }
        const nid = parseInt(id, 10);
        if (isNaN(nid)){
            return;
        }

        
           const fetchUser = async () => {
            try{
               
            } catch (err){
                console.error("Error fetching this user", err);
            }
        }
        fetchUser();
    }, [id, user])
    return (
        <>
        <div>
            
        </div>
        </>
    )
}