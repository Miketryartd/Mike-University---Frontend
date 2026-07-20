import { useState } from "react"
import { useClass } from "../hooks/useClass";

export default function MakeClass(){
   const [className, setClassName] = useState<string>("");
   const {loading, error, createClass} = useClass();

   const handleClass = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!className.trim()){
            alert("Please enter a class name");
            return;
    }
      try{
        
         const res = await createClass({class_name: className,});
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
                    <input type="text" placeholder="Class Name" onChange={(e) => setClassName(e.target.value)}></input>
                    <button type="submit">Create class</button>
                </form>
            </div>
        </div>
        </>
    )
}