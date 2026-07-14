import { useState } from "react"
import { getAnnouncement } from "../api/api.announce"
import { api } from "../api/client"
import type { Announce } from "../schemas/Announce";


export const useAnnouncement = () => {
    
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<Announce[] | null>([]);
    const announcements = async () => {
        setLoading(true);
        setError(null);

        try{

           const res = await getAnnouncement();
           setResult(res.data);
           return res.data;
        } catch (err){
            console.error("Error fetching announcements", err);
        } finally {
            setLoading(false);
        }
    }
    return {loading, error, result, announcements}

}