import axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://mostream-api.vercel.app/api";


export const api = axios.create({
    baseURL: BASE_URL,
    withCredentials:true,
})

