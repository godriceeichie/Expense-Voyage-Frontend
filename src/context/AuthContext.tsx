import { createContext, useState } from "react";
import { AuthContextType, UserType } from "../types";

const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {},
    accessToken: null,
    refreshToken: null,
    csrfToken: null,
    setAccessToken: () => {},
    setRefreshToken: () => {},
    setCSRFToken: () => {}
})

export function AuthContextProvider({children}: { children: React.ReactNode }){
    const [user, setUser] = useState<UserType | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const [csrfToken, setCSRFToken] = useState<string | null>(null);

    return(
        <AuthContext.Provider value={{
            setUser, user, 
            accessToken, setAccessToken,
            refreshToken, setRefreshToken,
            csrfToken, setCSRFToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext