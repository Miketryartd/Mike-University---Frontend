import { useEffect, useState } from "react";
import { useClass } from "../hooks/useClass";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import type { Class } from "../schemas/Class";

export default function Classes() {
  const [result, setResult] = useState<Class[] | null>(null);
  const { fetchUserClasses, loading, error } = useClass();

  useEffect(() => {
    const getClasses = async () => {
      try {
        const res = await fetchUserClasses();
        setResult(res);
        return res;
      } catch (err) {
        console.error("Error getting user classes", err);
      }
    };

    getClasses();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <Sidebar />
        <div className="p-4">
          <p>Loading classes...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <Sidebar />
        <div className="p-4">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="p-4 ml-64">
        <h1 className="text-2xl font-bold mb-6">My Classes</h1>

        {result && result.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {result.map((classItem, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-xl font-semibold text-blue-600 mb-2">
                  {classItem.subject_name}
                </h2>

                {classItem.class_code && (
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Code:</span>{" "}
                    {classItem.class_code}
                  </p>
                )}

                {classItem.user_email && (
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Instructor:</span>{" "}
                    {classItem.user_email}
                  </p>
                )}

                {classItem.created_at && (
                  <p className="text-gray-500 text-sm mt-2">
                    Created:{" "}
                    {new Date(classItem.created_at).toLocaleDateString()}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No classes found</p>
            <p className="text-gray-400">
              You haven't created any classes yet.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
