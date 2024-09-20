import { LoadingOverlay } from "@mantine/core";
import { ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { api } from "../api";

const AuthMiddleware = ({children}: {children: ReactNode}) => {

    const [loading, setLoading] = useState(false);
  const { user, setUser, accessToken, setAccessToken,setCSRFToken } = useAuth();
  const navigate = useNavigate();
//   const { pathname } = useLocation();
  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    async function verifyUser() {
      try {
        const response = await api.post("/auth/refresh-token");
        setAccessToken(response.data.access);
        setCSRFToken(response.headers["x-csrftoken"]);
        api
          .get("/auth/user", {
            headers: {
              Authorization: `Bearer ${response.data.access}`,
            },
          })
          .then((res) => {
            if (res.data) {
              setUser(res.data);
            }
            isMounted && setLoading(false);
            console.log(user)
          })
          .catch(() => {
            setLoading(false);
            navigate("/auth/login");
          });
      } catch (error: any) {
        // console.log(error);
        setLoading(false);
        navigate("/auth/login");
      }
    }

    !accessToken ? verifyUser() : setLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);
//   console.log(user)
  return (
    <>
      {loading ? (
        <LoadingOverlay
          visible={true}
          loaderProps={{ type: "bars", color: "green" }}
        />
      ) : (
        user &&
        children
      )}
    </>
  );
};

export default AuthMiddleware;
