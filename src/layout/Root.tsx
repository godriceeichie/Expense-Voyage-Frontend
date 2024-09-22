import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useRefreshToken from "../hooks/useRefreshToken";
import usePrivateApi from "../hooks/usePrivateApi";
import { LoadingOverlay } from "@mantine/core";

const Root = () => {
  const [loading, setLoading] = useState(true);
  const refresh = useRefreshToken(setLoading);
  const { accessToken, setUser, setAccessToken, setRefreshToken } = useAuth();
  const privateApi = usePrivateApi();

  useEffect(() => {
    let isMounted = true;
    async function verifyUser() {
      try {
        await refresh();
        privateApi
          .get("/auth/user", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((res) => {
            // console.log(res.data);
            if (res.data) {
              setUser(res.data);
            }
            isMounted && setLoading(false);
          })
          .catch(() => {
            setLoading(false);
          });
      } catch (error: any) {
        // console.log(error?.response);
        setUser(null);
        setAccessToken(null);
        setRefreshToken(null);
        setLoading(false);
      }
    }

    !accessToken ? verifyUser() : setLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);
  return loading ? (
    <LoadingOverlay
      visible={true}
      loaderProps={{ type: "bars", color: "green" }}
    />
  ) : (

    <div className="overflow-x-hidden">
      <Outlet />
    </div>
  );
};

export default Root;
