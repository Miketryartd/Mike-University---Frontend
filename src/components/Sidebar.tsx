import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useEffect, useState } from "react";


export default function Sidebar(){

    
   const  {hasRole, user} = useAuth();

   const [isToggle, setIsToggle] = useState<boolean>(true);
    let sidebar = [
        {to: "/Create-Announcement", label: "Create Announcement", role: 'teacher'},
        {to: "/Suggestions", label: "Suggestions", role: ""},
        {to: '/Classes', label: "Classes", role: ""}
    ];

    const vi = sidebar.filter((itm) => {
        if (itm.role.trim() === "") return true;
        return hasRole(itm.role);
    })

    const toggleSidebar = () => {
        setIsToggle((prev) => !prev);
    }

    return (
        <>
        <div className="w-80 min-h-screen h-full bg-gray-100 fixed">
            <ul className="m-5 gap-2 flex flex-col">
             {isToggle === true ? (
                 <>
                  {vi.map((itm, idx) => (
                <li  key={idx}><Link className="flex-grow bg-gray-200 rounded-md p-2 cursor-pointer  hover:bg-gray-300 block" to={itm.to}>{itm.label}</Link></li>
              ))}
                 </>
             ): (
               <>
                  <ul className="m-5 gap-2 flex flex-col "></ul>
               </>
             )}
            </ul>

            <div className="relative">
                <button  onClick={toggleSidebar} className="absolute right-1 cursor-pointer">
                    {isToggle === true ? (
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    ): (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
                    )}
                </button>
            </div>
        </div>
        </>
    )
}