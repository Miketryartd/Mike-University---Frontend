import type { User } from "./User";
export interface AuthContextType {
    user: User | null;
    loading: boolean;
    setUser: (user: any) => void;
    getUser: () => Promise<void>;
}