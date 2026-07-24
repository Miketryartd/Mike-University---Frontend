import { Link } from "react-router-dom";
import img1 from "../assets/images/accountancy.png";
import img2 from "../assets/images/architecture.png";
import img3 from "../assets/images/arts.png";
import img4 from "../assets/images/educationb.png";
export default function Courses(){
  const courses = [
        {src: img1, label: "SCHOOL OF BUSINESS AND ACCOUNTANCY", link: "/Accountancy"},
        {src: img2, label: "SCHOOL OF ENGINEERING AND ARCHITECTURE", link: "/Engineering"},
        {src: img3, label: "SCHOOL OF ARTS AND SCIENCES", link: "Arts"},
        {src: img4, label: "SCHOOL OF EDUCATION", link: "/Education"},
        {src: img1, label: "SCHOOL OF HOSPITALITY AND TOURISM MANAGEMENT", link: "/Hospitality"},
        {src: img1, label: "SCHOOL OF NURSING AND ALLIED MEDICAL SCIENCES", link: "/Nursing"},
        {src: img1, label: "SCHOOL OF COMPUTING", link: "/Information"},
        {src: img1, label: "COLLEGE OF CRIMINAL JUSTICE EDUCATION AND FORENSICS", link: "/Criminology"}
    ]
    return (
        <>
        <div className="flex flex-col justify-center text-center">
            <h1 className="font-bold text-4xl p-2">OUR COLLEGE</h1>
            <p>MU offers cutting-edge academic programs for the undergraduate level. Regardless of the area of discipline you choose,</p>
            <p>MU is committed to provide transformative education to make a difference, hone your values, and develop your capabilities.</p>
        </div>
        <div className="grid grid-cols-4 gap-4 justify-center   mt-5 m-15">
            {courses.map((itm, idx) => (
              <div className="bg-gray-100/30 flex flex-col shadow-md rounded-md justify-center text-center items-center"  key={idx}>
                <img src={itm.src} className="h-50 w-50 object-cover rounded-full" loading="lazy"></img>
                <h1 className="font-bold p-2">{itm.label}</h1>
                 <Link className="p-2 bg-red-400 w-full cursor-pointer text-white hover:underline" to={itm.link}>Visit page</Link>
                </div>
            ))}
        </div>
        </>
    )
}