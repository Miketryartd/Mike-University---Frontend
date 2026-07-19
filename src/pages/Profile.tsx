import { useParams } from "react-router-dom"
import { useProfile } from "../hooks/useProfile";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Profile() {
    const { id } = useParams<{ id: string }>();
    const { user, loading, error, fetchProfile } = useProfile();
    const [userId, setUserId] = useState<number | null>(null);

    useEffect(() => {
        if (!id) {
            console.error("User ID not found in URL");
            return;
        }
        
        const nid = parseInt(id, 10);
        if (isNaN(nid)) {
            console.error("Invalid user ID:", id);
            return;
        }
        
        setUserId(nid);
        fetchProfile(nid);
        
    }, [id]); 

    if (loading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div>
                <p>No user found.</p>
            </div>
        );
    }

    return (
       <>
       <div>

 <Navbar/>
<Sidebar/>

         <div className="flex justify-center items-center align-center  flex-col mt-20">
            <ul>
                <li><strong>Name:</strong> {user.name}</li>
                <li><strong>Email:</strong> {user.email}</li>
                <li><strong>Role:</strong> {user.role}</li>
                
            </ul>
        </div>

       </div>
       </>
    );
}