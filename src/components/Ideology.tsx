

export default function Ideology(){
    const ideal = [
        {title: "VISION", description: "dokdsookofs"},
        {title: "MISSION", description:  "FDJJFDKJFDFD"},
        {title: "PHILOSOPHY", description: "wejwejwejwei"},
        {title: "VALUES", description: "DKKKDSDKSKDSK"}
       
    ]
    return (
        <>
        <div className="flex justify-center flex-col text-center  mt-20">
         {ideal.map((itm, idx) => (
            <ul className="shadow-md" key={idx}>
            <li><h1>{itm.title}</h1></li>
            <li><p>{itm.description}</p></li>
            </ul>
         ))}
        </div>
        </>
    )
}