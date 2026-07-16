export interface Announce {

    title: string;
    body: string;
}

export interface AnnounceContext {
    id: number;
    teacher_id?: {
        id: number,
        name: string,
        email: string
    };
    email?: string;
    name?:string;
    title: string;
    body: string;
    created_at: string;
}