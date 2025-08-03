import { api } from "@/constants/api";
import { UserContext } from "@/providers/UserProvider";
import { LoginT } from "@/shared/types/auth";
import { login, logout } from "@/utils/api";
import { useContext, useState } from "react"




const useAuth = () => {
    const { setUser, setIsAuthenticated, isAuthenticated, user } = useContext(UserContext)
    const handleRegistration = () => { }

    const handleLogin = async (data: LoginT) => {
        try {
            const resp = await login(data)
            const user = (await resp?.data)?.user
            if (!user) return;
            if (setUser) {
                setUser({ id: user.id, email: user.email, name: user.name });
                setIsAuthenticated(true);
            }
        } catch (err) {
            console.log(err);
        }

    }

    const handleLogout = async () => {
        try {
            await logout();
            if (setUser) {
                setIsAuthenticated(false);
                setUser(null);
            }
        } catch (err) {
            console.log(err);
        }
    }


    return { handleLogin, handleRegistration, handleLogout, isAuthenticated, user }
}

export default useAuth;