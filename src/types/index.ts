import { Dispatch, SetStateAction } from "react";

export type UserType = {
  id: number;
  name: string;
  email: string;
  phone_number: string | null;
};

export type UserProfileFieldType = {
    name: string;
    phone_number: string
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
};



export type BookFlightType ={
    location: string
    destination: string
    date: string
    max: number
}
export type EmailType = {
  email: string;
};

export type ResetPasswordFieldType = {
  password: string;
  confirmPassword: string;
};


export type FindHotelType = {
  location: string
  hotel_rating: string
   amenitites: string
}