// useProfile.ts
import { useState } from "react"
import { apiUser } from "../api/api.user";

export const useProfile = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<any>(null);
    
    const fetchProfile = async (id: number) => {
        setLoading(true);
        setError(null);
        try {
         
            const userData = await apiUser(id);
            setUser(userData);
            return userData;
        } catch (err: any) {
            console.error("Error fetching user", err);
            setError(err.message || "Failed to fetch user");
        } finally {
            setLoading(false);
        }
    }

    return { user, fetchProfile, loading, error };
}