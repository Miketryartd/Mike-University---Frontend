import axios from "axios";
import { api } from "./client"
import type { Announce } from "../schemas/Announce";
export const createAnnounce = async (Announcement: Announce ) => {

    try{
       
        const res = await api.post(`/api/create-announcement`, Announcement);
        return res;
    } catch (err){
        console.error("Error creating announcement", err);
       if (axios.isAxiosError(err)){
          const msg = err.response?.data?.message || err.message;
            throw new Error(msg);
    }
    throw err;
    }
}

export const getAnnouncement = async (page: number) => {
    try{
        const res = await api.get(`/api/announcements${page}`);
        return res;
    } catch (err){
        console.error("Error fetching announcements from api", err);
        if (axios.isAxiosError(err)){
            const msg = err.response?.data?.message || err.message;
            throw new Error(msg);
        }
        throw err;
    }
}