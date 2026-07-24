import { useState } from "react";
import { fetchClass, getClasses } from "../api/api.class";
import type { Class } from "../schemas/Class";
import { jClass } from "../api/api.class";
export const useClass = () => {

    const [loading ,setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const generateCode = (length: number = 8): string => {
        
        const characters = import.meta.env.VITE_characters as string;
        let result = '';
        for (let i = 0; i < length; i++){
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    const createClass = async (Class: Class) => {
     setLoading(false);
     setError(null);
        try{
            const classCode = generateCode(8);
            const classData = {
                ...Class,
                class_code: classCode
            };
            const res = await fetchClass(classData);
            return res;
        } catch (err){
            console.error("Error creating class", err);
              setError(err instanceof Error ? err.message : "Failed to create class");
            throw err;
        } finally {
              setLoading(false);
        }
        
    }

    const fetchUserClasses = async () => {
        setLoading(true);
        setError(null);
        try{
            const res = await getClasses();
            return res;
        } catch (err){
          console.error("Error creating class", err);
              setError(err instanceof Error ? err.message : "Failed to fetch class");
              throw err;
        } finally {
            setLoading(false);
        }
    }

     const joinClass = async (code: string) => {
        setLoading(true);
        setError(null)
         try{
            const res = await  jClass(code);
            return res;
         } catch (err){
             console.error("Error creating class", err);
              setError(err instanceof Error ? err.message : "Failed to fetch class");
              throw err;
         } finally {
            setLoading(false)
         }
    }

    return {loading, error, createClass, fetchUserClasses, joinClass};
}