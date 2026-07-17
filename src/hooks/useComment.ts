import { useState } from "react"
import { createComment } from "../api/api.comment";

export const useComment = () => {
    const [loading , setLoading] = useState<boolean>(false);
    const [error , setError] = useState<string | null>(null);
   
    const addComment = async (comment: string, announcement_id: number) => {
        setLoading(true);
        setError(null);
          try{
           const res = await createComment(announcement_id, comment);
           return res.data;
          } catch (err){
            console.error("Error posting comment", err);
          } finally {
            setLoading(false);
          }
    }
    return {addComment, loading, error};
}