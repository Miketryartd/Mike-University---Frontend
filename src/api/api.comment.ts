// api/api.comment.ts
import { api } from "./client";
import type { Comment } from "../schemas/Comment";

export const createComment = async (announcementId: number, comment: string) => {
    try {
        const res = await api.post('/api/add-comment', {
            announcement_id: announcementId,
            comment: comment
        });
        return res.data;
    } catch (err) {
        console.error("Error adding comment:", err);
        throw err;
    }
};

export const editComment = async (commentId: number, comment: string) => {
    try {
        const res = await api.put(`/api/add-comment/${commentId}`, { comment });
        return res.data;
    } catch (err) {
        console.error("Error editing comment:", err);
        throw err;
    }
};

export const deleteComment = async (commentId: number) => {
    try {
        const res = await api.delete(`/api/comments/${commentId}`);
        return res.data;
    } catch (err) {
        console.error("Error deleting comment:", err);
        throw err;
    }
};

export const getComments = async (announcementId: number) => {
    try {
        const res = await api.get(`/api/comments/announcement/${announcementId}`);
        return res.data;
    } catch (err) {
        console.error("Error fetching comments:", err);
        throw err;
    }
};