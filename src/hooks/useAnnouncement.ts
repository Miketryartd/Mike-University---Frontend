import { useState } from "react"
import { getAnnouncement } from "../api/api.announce"
import { api } from "../api/client"
import type { AnnounceContext } from "../schemas/Announce";


export const useAnnouncement = () => {
    
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<AnnounceContext[] | null>([]);
    const announcements = async (page: number) => {
        setLoading(true);
        setError(null);

        try{
 
            
           const res = await getAnnouncement(page);
           const ad = res.data?.announcements?.data || [];
           setResult(ad);
           return ad;
        } catch (err){
            console.error("Error fetching announcements", err);
        } finally {
            setLoading(false);
        }
    }
    return {loading, error, result, announcements}

}