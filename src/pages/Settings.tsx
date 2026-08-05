import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UpdatePassword from "../components/UpdatePassword";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";


export default function Settings(){

    const menu = [{
        label: "User Information", to: "/"
    }, 
{ label: "Appearance", to: "/"}]
    return (
        <>
      <div>
        <div>
          {menu.map((item, idx) => (
            <ul key={idx}>
                <li><Link to={item.to}>{item.label}</Link></li>
            </ul>
          ))}
        </div>

        <UpdatePassword/>
      </div>
        </>
    )
}