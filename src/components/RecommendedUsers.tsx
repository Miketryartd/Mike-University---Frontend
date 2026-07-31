import { useEffect, useState } from "react"
import useRecommendedUsers from "../hooks/useRecommendedUsers"
import { Link } from "react-router-dom"

export default function RecommendedUsers(){
    const {loading, error, rUsers, result} = useRecommendedUsers()
    
    useEffect(() => {
        const fetchRUsers = async () => {
            try{
                await rUsers();
            } catch (err){
                console.error(error);
            }
        }

        fetchRUsers();
    }, [])
    return (
        <>
        <div>
          {result?.map((usr, idx) => (
            <>
            <ul key={idx}>
                <li><Link to={`/Profile/${usr.id}`}>{usr.name}</Link></li>
            </ul>
            </>
          ))}
        </div>
        </>
    )
}