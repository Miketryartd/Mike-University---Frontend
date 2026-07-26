import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useClass } from "../hooks/useClass";

export default function Join() {
  const [code, setCode] = useState<string>("");
  const { loading, error, joinClass } = useClass();

  const handleJoin = async () => {
    try {
      await joinClass(code);
    } catch (err) {
      console.error("Error joining class", err);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="min-h-screen bg-gray-50  flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl mt-20 shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Join a Class</h1>
              <p className="text-gray-500 mt-2">
                Enter your class code to join
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <input
                  onChange={(e) => setCode(e.target.value)}
                  type="text"
                  name="class_code"
                  placeholder="Enter class code"
                  value={code}
                  className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200 transition-all duration-200 bg-gray-50 hover:bg-white"
                  autoFocus
                />
                {code && (
                  <button
                    onClick={() => setCode("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              )}

              <button
                onClick={handleJoin}
                disabled={loading || !code.trim()}
                className={`
                  w-full py-3 px-6 text-lg font-semibold rounded-xl transition-all duration-200
                  ${loading || !code.trim()
                    ? "bg-gray-300 cursor-not-allowed text-gray-500"
                    : "bg-red-400 hover:bg-red-600 cursor-pointer text-white shadow-lg hover:shadow-xl active:transform active:scale-[0.98]"
                  }
                `}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Joining...
                  </div>
                ) : (
                  "Join Class"
                )}
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                Class codes are 6 characters long
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}