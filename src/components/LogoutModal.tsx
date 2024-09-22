import { Loader, Modal } from "@mantine/core";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import usePrivateApi from "../hooks/usePrivateApi";
import { useNavigate } from "react-router-dom";

type PropsType = {
    opened: boolean;
    close: () => void
  }

const LogoutModal = ({ opened, close }: PropsType) => {
  const { setUser, setAccessToken, setRefreshToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const privateApi = usePrivateApi();
  const navigate = useNavigate();

  const logout = () => {
    setLoading(true);
    privateApi
      .post("/auth/logout")
      .then(() => {
        setUser(null);
        setAccessToken(null);
        setRefreshToken(null);
        setLoading(false);
        close();
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Logout"
        centered
        classNames={{
          content: "",
          title: "font-semibold text-lg",
        }}
        overlayProps={{ blur: 2 }}
      >
        <div>
          <p className="text-[17px]">Are you sure you want to logout?</p>
        </div>
        <div className="flex items-center justify-end gap-2 mt-3">
          <button
            onClick={close}
            className="bg-[#1f1f1f] bg-opacity-5 py-1.5 px-4 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={logout}
            className="bg-error-color py-1.5 px-4 rounded-md flex items-center justify-center gap-2 text-white font-medium"
          >
            Logout {loading && <Loader color="white" size={"xs"} />}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default LogoutModal;
