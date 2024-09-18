import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "./useAuth";
import { api } from "../api";

const useRefreshToken = (setLoading?: any) => {
  const { setAccessToken, setCSRFToken } = useAuth();
  const navigate = useNavigate()
  const {pathname } = useLocation()

  const refresh = async () => {
    try {
      const response = await api.post("/auth/refresh-token");
      setAccessToken(response.data.access);
      setCSRFToken(response.headers["x-csrftoken"]);
      return { accessToken: response.data.access, csrfToken: response.headers["x-csrftoken"] };
    } catch (error: any) {
      if (setLoading) {
        setLoading(false);
      }
      
      if(error.response.data.code == "token_not_valid"){
        navigate(`/auth/login?from=${pathname}`)
      }
      throw error
    }
  };

  return refresh;
};

export default useRefreshToken;
