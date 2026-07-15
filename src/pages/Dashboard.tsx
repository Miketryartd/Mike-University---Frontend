import Announcement from "../components/Announcement";
import CreateAnnouncement from "../components/CreateAnnouncement";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";



export default function Dashboard(){

    return (
        <>
        <div>
           <Navbar/>
               <Sidebar/>
            <h1>Dashboard</h1>
            
            <CreateAnnouncement/>
            <Menu/>
        
            <Announcement/>
        </div>
        </>
    )
}