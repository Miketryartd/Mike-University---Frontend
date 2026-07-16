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
                        
                       <div className=" flex justify-center items-center ">
                        <ul className="p-2 flex  justify-start flex-row bg-gray-100 shadow-md min-w-95 ">
                         <li className="m2" key={idx}>
                           

                       <div className="flex flex-row gap-2">
                              <h1 className="p-2 bg-white rounded-full border font-bold  shadow-md h-10 w-10 flex justify-center text-center">{announcement.teacher_id?.name.charAt(0).toUpperCase() ?? "U"}</h1>
                           <h1 className="mt-2 font-bold ">{announcement.teacher_id?.email ?? "Anonymous"}</h1>
                           
                       </div>
                        <p className="text-gray-600"><span className="font-bold text-black">Uploaded at: </span>{announcement.created_at}</p>
                          
                           <div className="m-5 p-2 bg-gray-200 min-w-95 max-h-screen overflow-auto min-h-40">
                             <h3 ><span className="font-bold">Title:</span> {announcement.title }</h3>
                            <p ><span className="font-bold">Subject: </span>{announcement.body}</p>
                           </div>
                          
                        </li>
                       </ul>
                       </div>
                    ))}
                </ul>
            )}
        </div>
    )
}