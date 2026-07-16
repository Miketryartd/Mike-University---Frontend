import { useEffect, useState } from "react";
import { useAnnouncement } from "../hooks/useAnnouncement"

export default function Announcement(){
    const {loading, error, result, announcements} = useAnnouncement();
    const [page, setPage] = useState<number>(1);
    
    useEffect(() => {
        const fetchAnnouncements = async () => {
            try{
                await announcements(page);
            } catch (err){
                console.error("Error getting announcements", err);
            }
        }
        fetchAnnouncements();
    }, [])
    
    return (
        <div>
            {loading && <p>Loading announcements...</p>}
            
            {error && <p style={{color: 'red'}}>Error: {error}</p>}
            
            {!loading && !error && result && result.length === 0 && (
                <p>No announcements available</p>
            )}
            
            {!loading && !error && result && result.length > 0 && (
                <ul>
                    {result.map((announcement, idx) => (
                       <div className="p-2 flex justify-center flex-row ">
                         <li key={idx}>
                          
                            <h3>{announcement.title }</h3>
                            <p>{announcement.body}</p>
                            <p>{announcement.created_at}</p>
                          
                        </li>
                       </div>
                    ))}
                </ul>
            )}
        </div>
    )
}