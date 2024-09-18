import { Dispatch, SetStateAction } from "react";

export type UserType = {
    id: number;
    name: string;
    email: string;
}

export type AuthContextType = {
    user: UserType | null;
    setUser: Dispatch<SetStateAction<UserType | null>>;
    accessToken: string | null;
    refreshToken: string | null;
    csrfToken: string | null;
    setAccessToken: Dispatch<SetStateAction<string | null>>;
    setRefreshToken: Dispatch<SetStateAction<string | null>>;
    setCSRFToken: Dispatch<SetStateAction<string | null>>;
  };

export type SignupFieldType = {
    name: string;
    email: string;
    password: string;

}