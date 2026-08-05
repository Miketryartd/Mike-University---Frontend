import { api } from "./client";

export const apiUser = async (id: number) => {
  try {
    const res = await api.get(`api/profile/user/${id}`);
    const d = res.data.user || res.data || [];
    return d;
  } catch (err) {
    console.error("Error fetching user with this id", err);
  }
};

export const apiRSUser = async () => {
  try{
    const res = await api.get(`api/user/recommended`);
   
    const d = res.data.user?.data || res.data?.data || [];
    return d;
  } catch (err){
    console.error("Error fetching recommended user", err);
    return []; 
  }
}

export const apiUpdateUserPassword = async (newPassword: string) => {

  try{

    const res = await api.patch("/api/user/update/password", {newPassword});
    const ud = res.data?.data.user || res.data.user || res.data || [];
    return ud;
  } catch (err){
    console.error("Error fetching api update for user", err);
  }
}