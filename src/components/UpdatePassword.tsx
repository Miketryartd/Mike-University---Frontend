import {useProfile} from "../hooks/useProfile";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { useAuth } from "../context/auth";
export default function UpdatePassword(){
   
    const {user} = useAuth();
    const {updateUserPassword, loading, error} = useProfile();
    const [oldPassword, setOldPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [reEnterPassword, setReEnterPassword] = useState<string>("");
    
    
    
    const updateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
           
            if (newPassword !== reEnterPassword){
                alert("New password and re-entered password do not match");
                return;
            }

            if (newPassword === oldPassword){
                alert("New password cannot be the same as old password");
                return;
            }
             await updateUserPassword(oldPassword,newPassword);
                 setOldPassword("");
            setNewPassword("");
            setReEnterPassword("");
        } catch (error){
            console.error("Error updating password", error);
        }
    }
    return (
        <>
        <div>
            <form method="POST" onSubmit={updateProfile} >
                <input type="password" placeholder="Enter your password" required onChange={((e) => setOldPassword(e.target.value))}></input>
                <input type="password" placeholder="Enter new password" required onChange={((e) => setNewPassword(e.target.value))}></input>
                <input type="password" placeholder="Re-enter new password" required onChange={((e) => setReEnterPassword(e.target.value))}></input>
               <button type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Save"}
                </button>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </form>
            </div>
        </>
    )
}