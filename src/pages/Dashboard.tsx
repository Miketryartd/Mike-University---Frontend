import CreateAnnouncement from "../components/CreateAnnouncement";
import Menu from "../components/Menu";
import Search from "../components/Search";


export default function Dashboard(){

    return (
        <>
        <div>
            <Search></Search>
            <h1>Dashboard</h1>
            <CreateAnnouncement/>
            <Menu/>
        </div>
        </>
    )
}