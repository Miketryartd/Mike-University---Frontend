import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useState } from "react";
import img from "../assets/images/logo_2.png";
export default function Sidebar() {
    const { hasRole, user } = useAuth();
    const [isToggle, setIsToggle] = useState<boolean>(true);
    
    let sidebar = [
        { to: "/Dashboard", label: "Home", role: "" },
        { to: "/Create/Class", label: "Create Class", role: 'teacher' },
        { to: "/Create/Announcement", label: "Create Announcement", role: 'teacher' },
        { to: "/Suggestions", label: "Suggestions", role: "" },
        { to: '/Classes', label: "Classes", role: "teacher" },
        { to: "/Join", label: "Join", role: "student" }
    ];

    const vi = sidebar.filter((itm) => {
        if (itm.role.trim() === "") return true;
        return hasRole(itm.role);
    });

    const toggleSidebar = () => {
        setIsToggle((prev) => !prev);
    };

    return (
        <>
            
            <div 
                className={`fixed top-0 left-0 h-full bg-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden z-50 ${
                    isToggle ? 'w-64' : 'w-0'
                }`}
            >
             
                <div className={`h-full ${isToggle ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                    <div className="flex justify-center items-center p-4 border-b border-gray-200">
                       <img src={img} alt="Logo" className="h-35 w-35 object-cover rounded-full" />
                     
                    </div>
                    
                    <ul className="p-4 space-y-2">
                        {vi.map((itm, idx) => (
                            <li key={idx}>
                                <Link 
                                    className="block px-4 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors text-gray-700 font-medium"
                                    to={itm.to}
                                >
                                    {itm.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

          
            <button
                onClick={toggleSidebar}
                className={`fixed top-4 z-50 p-2 bg-gray-100 hover:bg-gray-200 rounded-r-lg shadow-lg transition-all duration-300 ease-in-out cursor-pointer ${
                    isToggle ? 'left-64' : 'left-0'
                }`}
                style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
                {isToggle ? (
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M15 16l4 -4" />
                        <path d="M15 8l4 4" />
                    </svg>
                ) : (
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l4 4" />
                        <path d="M5 12l4 -4" />
                    </svg>
                )}
            </button>

          
          
        </>
    );
}