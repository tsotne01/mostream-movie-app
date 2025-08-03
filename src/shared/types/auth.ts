import z from "zod";
import { LoginSchema } from "../schemas/auth";

export type LoginT = z.infer<typeof LoginSchema>


export type UserT = {
    id: string | undefined;
    email: string | undefined;
    name: string | undefined;
}

export type LoginResponseType = {
    user: UserT;
    accessToken: string;
}