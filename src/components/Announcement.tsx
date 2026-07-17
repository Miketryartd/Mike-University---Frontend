import { useEffect, useState } from "react";
import { useAnnouncement } from "../hooks/useAnnouncement";
import CommentSection from "./CommentSection";
import { Link, useParams } from "react-router-dom";

export default function Announcement() {
  const { loading, error, result, announcements } = useAnnouncement();
  const [page, setPage] = useState<number>(1);
  const { id } = useParams();
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        await announcements(page);
      } catch (err) {
        console.error("Error getting announcements", err);
      }
    };
    fetchAnnouncements();
  }, [page]);

  return (
    <div>
      {loading && <p>Loading announcements...</p>}

      {error && <p className="text-red-400">Error: {error}</p>}

      {!loading && !error && result && result.length === 0 && (
        <p>No announcements available</p>
      )}

      {!loading && !error && result && result.length > 0 && (
        <ul>
          {result.map((announcement, idx) => (
            <div className=" flex justify-center items-center m-5 ">
              <ul className="p-2 flex  justify-start flex-row bg-gray-100 shadow-md min-w-95 ">
                <li className="m2" key={idx}>
                  <div className="flex flex-row gap-2">
                    <h1 className="p-2 bg-white rounded-full border font-bold  shadow-md h-10 w-10 flex justify-center text-center">
                      {announcement.teacher_id?.name.charAt(0).toUpperCase() ??
                        "U"}
                    </h1>
                    <h1 className="mt-2 font-bold ">
                      {announcement.teacher_id?.email ?? "Anonymous"}
                    </h1>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-bold text-black">Uploaded at: </span>
                    {announcement.created_at}
                  </p>

                  <div className="m-5 p-2 bg-gray-200 min-w-95 max-h-screen overflow-auto min-h-40">
                    <h3>
                      <span className="font-bold">Title:</span>{" "}
                      {announcement.title}
                    </h3>
                    <p>
                      <span className="font-bold">Subject: </span>
                      {announcement.body}
                    </p>
                  </div>
                  <div className="flex flex-row p-2 text-gray-500 justify-end">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </button>
                    <Link className="cursor-pointer" to={`/Detail/${announcement.id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-message-circle"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                      </svg>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
