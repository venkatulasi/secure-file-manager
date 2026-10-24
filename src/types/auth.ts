import { ApiResponse } from "./api";

export type User = {
    id: number;
    name: string;
    email: string;
    role: string;
};

export type RegisterRequest = {
    name: string;
    email: string;
    password: string;
}

export type RegisterResponse = ApiResponse<User>;
