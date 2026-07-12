import { useState } from "react"
import { useCreateAnnouncement } from "../hooks/useCreateAnnouncement";
import type { Announce } from "../schemas/Announce";

export default function CreateAnnouncement(){
 
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    
     const {loading, error, create} = useCreateAnnouncement();
    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        const Announcement: Announce = {title, body};
        try{
            const res = await create(Announcement);
            return res.data;
        } catch (err){
            console.error(error);
        }
    }
    return (
        <>
        <div>
            <form method="POST" onSubmit={handleCreate}>
                <input type="text" placeholder="Title" required name="title" onChange={(e) => setTitle(e.target.value)}></input>
                <input type="text" placeholder="Body" required name="body" onChange={(e) => setBody(e.target.value)}></input>
                <button type="submit">Create</button>
            </form>

        </div>
        </>
    )
}