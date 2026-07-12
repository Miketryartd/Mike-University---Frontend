import CreateAnnouncement from "../components/CreateAnnouncement";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";



export default function Dashboard(){

    return (
        <>
        <div>
           <Navbar/>
            <h1>Dashboard</h1>
            <CreateAnnouncement/>
            <Menu/>
        </div>
        </>
    )
}