import { useState } from "react";
import { apiRSUser } from "../api/api.user";
import type { User } from "../schemas/User";

export default function useRecommendedUsers(){

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<User[] | null>([]);
    
    const rUsers = async () => {
        setLoading(true);
        setError(null);
        try{
            const res = await apiRSUser();
            setResult(res);
            return res;
        } catch (err: any){
              console.error("Error fetching user", err);
            setError(err.message || "Failed to fetch user");
        } finally {
            setLoading(false);
        }
    }

    return {loading, error, rUsers, result}
}