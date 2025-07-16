export interface UserResponse {
    id: number;
    name: string;
    username: string;
    email: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
} 