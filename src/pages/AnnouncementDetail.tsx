import { useParams } from "react-router-dom";
import { useAnnouncement } from "../hooks/useAnnouncement";
import { useEffect, useState } from "react";
import type { AnnounceContext } from "../schemas/Announce";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CommentSection from "../components/CommentSection";

export default function AnnouncementDetail() {
    const { id } = useParams<{ id: string }>();
    const { announcements, loading, error, result } = useAnnouncement();
    const [detailAnnouncement, setDetailAnnouncement] = useState<AnnounceContext | null>(null);
    const [detailLoading, setDetailLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchDetail = async () => {
            if (!id) {
                setDetailLoading(false);
                return;
            }

            const numericId = parseInt(id, 10);
            if (isNaN(numericId)) {
                setDetailLoading(false);
                return;
            }

            if (!result || result.length === 0) {
                await announcements(1);
            } else {
                const found = result.find((a: AnnounceContext) => a.id === numericId);
                setDetailAnnouncement(found || null);
                setDetailLoading(false);
            }
        };

        fetchDetail();
    }, [id]);

    useEffect(() => {
        if (id && result && result.length > 0) {
            const numericId = parseInt(id, 10);
            if (!isNaN(numericId)) {
                const found = result.find((a: AnnounceContext) => a.id === numericId);
                setDetailAnnouncement(found || null);
                setDetailLoading(false);
            }
        }
    }, [result]);

    if (loading || detailLoading) return <div>Loading announcement...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!detailAnnouncement) return <div>Announcement not found</div>;

    return (
     <>
     <Navbar/>
     <Sidebar/>
        <div className="flex justify-center items-center m-5">
            <ul className="p-2 flex justify-center flex-row bg-gray-100 shadow-md min-w-96">
                <li className="m2">
                    <div className="flex flex-row gap-2">
                        <h1 className="p-2 bg-white rounded-full border font-bold shadow-md h-10 w-10 flex justify-center text-center">
                            {detailAnnouncement.teacher_id?.name?.charAt(0).toUpperCase() ?? "U"}
                        </h1>
                        <h1 className="mt-2 font-bold">
                            {detailAnnouncement.teacher_id?.email ?? "Anonymous"}
                        </h1>
                    </div>
                    <p className="text-gray-600">
                        <span className="font-bold text-black">Uploaded at: </span>
                        {detailAnnouncement.created_at}
                    </p>
                    <div className="m-5 p-2 bg-gray-200 min-w-95 max-h-screen overflow-auto min-h-40">
                        <h3>
                            <span className="font-bold">Title:</span>{" "}
                            {detailAnnouncement.title}
                        </h3>
                        <p>
                            <span className="font-bold">Subject: </span>
                            {detailAnnouncement.body}
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
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                        </button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-message-circle"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                        </svg>
                    </div>
                    <CommentSection announcementId={detailAnnouncement.id}/>
                </li>
            </ul>
        </div>
     </>
    );
}