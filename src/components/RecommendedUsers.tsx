import { useEffect } from "react"
import useRecommendedUsers from "../hooks/useRecommendedUsers"
import { Link } from "react-router-dom"

export default function RecommendedUsers(){
    const {loading, error, rUsers, result} = useRecommendedUsers()
    
    useEffect(() => {
        rUsers();
    }, [])
    
    if (loading) return (
        <div className="flex justify-center items-center py-8">
            <div className="text-gray-500">Loading suggested users...</div>
        </div>
    );
    
    if (error) return (
        <div className="flex justify-center items-center py-8">
            <div className="text-red-500">Error: {error}</div>
        </div>
    );
    
    if (!result || result.length === 0) return (
        <div className="flex justify-center items-center py-8">
            <div className="text-gray-500">No recommended users found</div>
        </div>
    );
    
    return (
        <div className="flex flex-col items-center justify-center mt-20 w-full py-8 px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">People you may know</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full">
                {result.map((usr) => (
                    <Link 
                        key={usr.id}
                        to={`/Profile/${usr.id}`}
                        className="bg-white hover:shadow-lg rounded-lg p-4 text-center border border-gray-200 transition-shadow duration-200"
                    >
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-blue-600 text-xl font-bold">
                                {usr.name?.charAt(0).toUpperCase() || "U"}
                            </span>
                        </div>
                        <div className="font-medium text-gray-800">{usr.name}</div>
                        <div className="text-sm text-gray-500">View Profile</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}