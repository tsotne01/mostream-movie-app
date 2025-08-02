import { UserContext } from "@/providers/UserProvider";
import { useContext, useState } from "react"




const useAuthStatus = () => {
    const { isAuthenticated, user } = useContext(UserContext)

    return { isAuthenticated, user }
}

export default useAuthStatus;