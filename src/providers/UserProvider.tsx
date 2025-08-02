'use client'

import { UserT } from "@/shared/types/auth";
import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

type UserContextType = {
    user: UserT | null;
    setUser: Dispatch<SetStateAction<UserT | null>>;
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
    isAuthenticated: false,
    setIsAuthenticated: () => {},
});

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<UserT | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;