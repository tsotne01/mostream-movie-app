import z from "zod";
import { LoginSchema } from "../schemas/auth";

export type LoginT = z.infer<typeof LoginSchema>


export type UserT = {
    id: string;
    email: string;
    name: string;
}

export type LoginResponseType = {
    user: UserT;
    accessToken: string;
}