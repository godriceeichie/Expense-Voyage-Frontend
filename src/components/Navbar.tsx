import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import useAuth from "../hooks/useAuth";
import { Avatar, Box, Flex, Menu, Text } from "@mantine/core";
import { MdOutlineDashboard, MdOutlineLogout } from "react-icons/md";
import profile from "../assets/avatar.png";
import { useDisclosure } from "@mantine/hooks";
import LogoutModal from "./LogoutModal";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
    console.log(user)
  return (
    //  className='nav'
    <div className="sticky top-0 z-10 bg-white flex items-center justify-between py-2 px-4 text-base border-b border-gray-200 shadow-sm">
      <Logo />
      <ul className="hidden lg:flex items-center gap-4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      {user ? (
        <>
          <Menu shadow="lg" position="bottom-end" width={200}>
            <Menu.Target>
              <Avatar src={profile} name="Gerald" className="cursor-pointer" />
            </Menu.Target>
            <Menu.Dropdown>
              {/* <Menu.Label>Application</Menu.Label> */}
              <Menu.Item
                className="menuItem"
                leftSection={<Avatar src={profile} />}
              >
                <Flex>
                  <Box>
                    <Text className=" profilename" fw={500} fs={"12px"}>
                      {user.name}
                    </Text>
                  </Box>
                </Flex>
              </Menu.Item>
              <Menu.Divider bg={"#A9A8BF"} />
              <Menu.Item
                leftSection={<MdOutlineDashboard />}
                onClick={() => navigate("/dashboard/home")}
              >
                My Dashboard
              </Menu.Item>
              <Menu.Divider bg={"#A9A8BF"} />
              <Menu.Item
                className="flex items-center"
                color="red"
                leftSection={<MdOutlineLogout />}
                onClick={open}
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <LogoutModal opened={opened} close={close} />
        </>
      ) : (
        <div className="flex items-center gap-2">
          <Link to={"/auth/login"} className="text-base">
            Log In
          </Link>
          <Link
            to={"/auth/signup"}
            className="bg-primary-color text-base text-white px-4 py-2 rounded-full font-medium"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
