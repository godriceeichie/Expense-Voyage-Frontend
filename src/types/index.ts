import { Dispatch, SetStateAction } from "react";

export type UserType = {
  id: number;
  name: string;
  email: string;
};

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
};

<<<<<<< HEAD
}

export type BookFlightType ={
    location: string
    destination: string
    date: string
    max: number
}
=======
export type EmailType = {
  email: string;
};

export type ResetPasswordFieldType = {
  password: string;
  confirmPassword: string;
};
>>>>>>> 0bc248bb265914eed1201b54af48d45e04a6257f
