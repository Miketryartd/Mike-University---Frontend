import { useAuth } from "../context/auth";
import { useEffect, useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";

export default function ProfileMenu() {
    const { loading, user } = useAuth();
    const { logout } = useLogout();
    const [active, setActive] = useState<boolean>(false);

    const getInitial = () => {
        if (!user?.name) return "U";
        const name = user.name.trim();
        if (name === '') return 'U';
        return name.charAt(0).toUpperCase();
    }

    const handleLogout = async () => {
        try {
            await logout();
            setActive(false);
        } catch (error) {
            console.error("Error logging out current user", error);
        }
    }

    const toggleMenu = () => {
        setActive((prev) => !prev);
    }

    const menu = [
        { label: "Profile", to: "/Profile" },
        { label: "Settings", to: "/Settings" },
        { label: "Logout", to: "#", onClick: handleLogout } 
    ];

    return (
        <>
            <button 
                onClick={toggleMenu} 
                className="cursor-pointer border bg-gray-200 shadow-md border-black transition ease-in-out hover:bg-white p-5 rounded-full m-2 h-10 w-10 flex items-center justify-center font-bold"
            >
                {getInitial()}
            </button>
            
            {active && (
                <div className="absolute right-0 mt-40 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    {menu.map((item, idx) => (
                        <ul key={idx} className="list-none m-0 p-0">
                            <li>
                                {item.onClick ? (
                                    
                                    <button
                                        onClick={item.onClick}
                                        className="block cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                    >
                                        {item.label}
                                    </button>
                                ) : (
                                   
                                    <Link
                                        to={item.to}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                        onClick={() => setActive(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        </ul>
                    ))}
                </div>
            )}
        </>
    );
}