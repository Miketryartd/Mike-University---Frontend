import { useState } from "react";
import { searchQuery } from "../api/api.search";

export const useSearch = () => {

    const [error, setError] = useState<null | string>(null);
    const [loading, setLoading] = useState<boolean>(false);
     const [results, setResults] = useState<any[]>([]);
     const [pagination, setPagination] = useState<any>(null);


    const search = async (query: string) => {
        if (!query.trim()){
            setError("Please select a search term.");
            return;
        }
          setLoading(true);
        setError(null);
       try{
      
        const data = await searchQuery(query);
         if (data && data["user(s):"]){
            const userData = data["user(s):"];
            setResults(userData.data || []);
            setPagination({
                    current_page: userData.current_page,
                    total: userData.total,
                    per_page: userData.per_page,
                    last_page: userData.last_page,
                    from: userData.from,
                    to: userData.to
                });
         } else if (data && data.data){
             setResults(data.data);
                setPagination({
                    current_page: data.current_page,
                    total: data.total,
                    per_page: data.per_page,
                    last_page: data.last_page
                });
         }
        
        return data;
       } catch (err){
        console.error("Error searching w this queryy", err);
       } finally {
        setLoading(false);
       }
       
    }

    return {search, loading, error, results, pagination};

}