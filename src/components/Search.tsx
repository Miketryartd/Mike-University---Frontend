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
        <div>

          <div>
              <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Search.." required name="search"></input>
            <button onClick={handleSearch}>Search</button>
          </div>

          {results && results.length > 0 ? (
                    <>
                    <div>
                      {pagination && (
                        <p>Found {pagination.total} results</p>
                      )}
                    </div>
                    <div>
                      <ul>
                        {results.map((user, idx) => (
                          <li key={idx}>{user.name}</li>
                        ))}
                      </ul>
                    </div>
                    </>
          ): (
                  <>
                  <div>
                    <h1>Error {error}</h1>
                  </div>
                  </>
          )}
        </div>
        </>
     )
}