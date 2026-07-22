import { useState } from "react"
import { useClass } from "../hooks/useClass";

export default function MakeClass(){
   const [subjectName, setSubjectName] = useState<string>("");
   const [sectionName, setSectionName] = useState<string>("");
   const {loading, error, createClass} = useClass();

   const handleClass = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!subjectName.trim()){
            alert("Please enter a class name");
            return;
    }
      try{
        
         const res = await createClass({subject_name: subjectName,
            class_section: sectionName
         });
         return res;
      } catch (err){
        console.error("Error making class", err);
        
      }
   }
    return (
        <>
        <div>

            <div>
                <form method="POST" onSubmit={handleClass}>
                    <input type="text" placeholder="Subject Name" onChange={(e) => setSubjectName(e.target.value)}></input>
                    <input type="text" placeholder="Class Section" onChange={(e) => setSectionName(e.target.value)}></input>
                    <button type="submit">Create class</button>
                </form>
            </div>
        </div>
        </>
    )
}