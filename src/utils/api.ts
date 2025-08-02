import { api } from "@/constants/api";
import { LoginResponseType, LoginT } from "@/shared/types/auth";

export const login = async ({ email, password }: LoginT) => {
    try {
        const resp = await api.post<Promise<LoginResponseType>>("/auth/login", {
            email,
            password
        })
        const data = await resp;
        return data;
    } catch (error) {
        console.log("failed")
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log(error);
        }
    }
}

export const logout = async () => {
    try {
        const resp = await api.post<Promise<LoginResponseType>>("/auth/logout")
    } catch (error) {
        console.log("failed to logout")
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log(error);
        }
    }
}

