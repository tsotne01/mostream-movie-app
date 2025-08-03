import { paths } from "@/types/schema";
import createClient from "openapi-fetch/dist/index.cjs";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://mostream-api.vercel.app/";


export const api = createClient<paths>({ baseUrl: BASE_URL });

