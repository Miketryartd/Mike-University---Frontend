import { api } from "./client"


export const  apiUser = async (id: number) => {

    try{

        const res = await api.get(`api/user/${id}`);
        const d = res.data.user || res.data;
        return d;
    } catch (err){
        console.error("Error fetching user with this id", err);
    }
}