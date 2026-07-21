import { Link } from "react-router-dom";
import logo from "../assets/images/logo_2.png";

export default function Header() {
  const menu = [
    { to: "/About", label: "About" },
    { to: "/Courses", label: "Courses" },
    { to: "/Login", label: "Login" },
  ];

  return (
    <header className="w-full shadow-sm flex justify-between items-center px-5 py-1">
      <img loading="lazy" className="h-25 w-auto object-contain" src={logo} alt="Logo" />
      <nav>
        <ul className="flex space-x-6">
          {menu.map((item) => (
            <li key={item.to}>
             {item.label === "Login" ? (
             <Link to={item.to} className="hover:underline hover:bg-red-600  font-bold text-white bg-red-400 rounded-md px-2 py-1">
                {item.label}
              </Link>
             ): (
             <Link to={item.to} className="hover:underline font-bold">
                {item.label}
              </Link>
             )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}