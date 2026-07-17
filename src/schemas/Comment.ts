export interface Comment {
    id: number;
    comment: string;
    user_type: 'student' | 'teacher';
    user_id: number;
    announcement_id: number;
    created_at: string;
    updated_at: string;
    user?: {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}