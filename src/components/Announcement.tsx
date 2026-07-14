import { useEffect } from "react";
import { useAnnouncement } from "../hooks/useAnnouncement"


export default function Announcement(){
    const {loading, error, announcements, result} = useAnnouncement();
    useEffect(() => {

        const getAnnouncements = async () => {
            try{
                await announcements();
            } catch (err){
                console.error("Error getting announcements", err);
            }
        }
        getAnnouncements();
    }, [])
    return (
        <>
        <div>
           
        </div>
        </>
    )
}