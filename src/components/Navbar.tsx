import Search from "./Search";
import logo_2 from "../assets/images/logo_2.png";
export default function Navbar(){

    return (
        <>
        <div>
        <div className="flex flex-row justify-between w-full p-5 bg-gray-100">
            <div>
                <img loading="lazy" className="h-25 w-50 object-cover" src={logo_2}></img>
            </div>
            <div className="flex items-center align-center">
                 <Search/>
            </div>
        </div>
        </div>
        </>
    )
}