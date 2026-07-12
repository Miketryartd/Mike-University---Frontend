import { useState } from "react"
import { useSearch } from "../hooks/useSearch"

export default function Search(){

    const [query, setQuery] = useState<string>("");
    const {loading, error, search, results, pagination} = useSearch();
    const handleSearch = async (e: React.FormEvent) => {
          e.preventDefault();
        try{
             const q = await search(query);
             return q;
        } catch (error){
            error;
        }
    }
     return (
        <>
        <div className="">

          <div className="min-w-100 w-full flex-row flex">
              <input className="w-full p-4 outline-none  border-b bg-white " type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Search.." required name="search"></input>
            <button className="cursor-pointer p-4 bg-red-400 text-white transition hover:bg-red-600 rounded-full " onClick={handleSearch}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg></button>
          </div>

          {results && results.length > 0 ? (
                    <>
                   <div className="bg-white absolute shadow-md min-w-86">
                     <div className="m-2">
                      {pagination && (
                        <p>Found {pagination.total} results</p>
                      )}
                    </div>
                    <div>
                      <ul className="">
                        {results.map((user, idx) => (
                          <li className="border-b transition hover:bg-gray-100 cursor-pointer border-black/20 p-2" key={idx}>{user.name}</li>
                        ))}
                      </ul>
                    </div>
                   </div>
                    </>
          ): (
                  <>
                   {/*put error here later*/}
                  </>
          )}
        </div>
        </>
     )
}