import { useEffect } from "react";
import useAuth from "./useAuth";
import { privateApi } from "../api";
import useRefreshToken from "./useRefreshToken";

const usePrivateApi = () => {
  const { accessToken, setAccessToken, csrfToken, setUser, setRefreshToken } = useAuth();
  const refresh = useRefreshToken();

  useEffect(() => {
    const requestIntercept = privateApi.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
          config.headers["X-CSRFToken"] = csrfToken;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = privateApi.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if ((error?.response?.status === 401 || error?.response?.status === 400) && !prevRequest?.sent) {
          prevRequest.sent = true;
          try {
            const { csrfToken: newCSRFToken, accessToken: newAccessToken } = await refresh();
            setAccessToken(newAccessToken);
            prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
            prevRequest.headers["X-CSRFToken"] = newCSRFToken;
            return privateApi(prevRequest);
          } catch (refreshError) {
            // Handle refresh token failure
            setUser(null);
            setAccessToken(null);
            setRefreshToken(null);
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      privateApi.interceptors.request.eject(requestIntercept);
      privateApi.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, csrfToken, refresh, setAccessToken, setUser, setRefreshToken]);

  return privateApi;
};

export default usePrivateApi;
