import { useState } from "react"
import { createAnnounce } from "../api/api.announce"
import type { Announce } from "../schemas/Announce";

export const useCreateAnnouncement = () => {
 
     const [loading, setLoading] = useState<boolean>(false);
     const [error, setError] = useState<string | null>(null);

     const create = async (Announcement: Announce) => {
           
           setLoading(true);
           setError(null);
           try{
            const res = await createAnnounce(Announcement);
            return res.data;
           } catch (err){
            console.error("Error creating post", err);
            
           } finally {
            setLoading(false);
           }

          
     }
      return {loading, create, error};
     
}