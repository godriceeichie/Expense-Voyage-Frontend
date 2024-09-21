import {
  Avatar,
  Box,
  Flex,
  Indicator,
  Input,
  Kbd,
  Menu,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { Outlet, useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";
import {
  IoSearch,
  IoPersonOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import "../styles/dashHome.css";
import "../styles/dashboard.css";
import profile from "../assets/avatar.png";
import DashboardSideBar from "../components/DashboardSideBar";
import { Logo } from "../components";
import { GoHome } from "react-icons/go";

const UserDashLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box className=" flex w-full ">
        <Box
          className="gidden lg:flex flex-col sideBar sticky top-0 p-4 h-screen  overflow-y-scroll sidebar border-r border-r-[#E9E9E9] rounded-r-lg"
          color="#bbbad1"
          //   bg={"#2e3349"}
          w={"25%"}
        >
          <Box className="flex flex-col w-full gap-12">
            {/* <Box className="w-full flex justify-between items-center">
              <Box className="w-1/2 flex items-center gap-2">
                <Box className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-md ">
                  bed
                </Box>
                <Text className="font-extrabold text-xl" fw={"600"}>
                  Company name
                </Text>
              </Box>
              <Box className="text-2xl">
                <FaRegArrowAltCircleLeft />
              </Box>
            </Box> */}
            <header>
              <div className="flex items-center justify-center gap-1">
                <Logo />
                <Link to={"/dashboard/home"}>
                  <h1 className="text-xl font-semibold">Expense Voyage</h1>
                </Link>
              </div>
            </header>
            <ul className="flex flex-col">
              <li className="group px-2 py-2 rounded-lg text-lg">
                <NavLink
                  to="/dashboard/home"
                  className={({ isActive }) =>
                    `nav-link flex items-center gap-3 font-medium pl-4 py-2 ${
                      isActive
                        ? "bg-primary-color text-white rounded-md active"
                        : ""
                    }`
                  }

                  // activeClassName="text-primary-color"
                >
                  <GoHome size={20} />
                  Home
                </NavLink>
              </li>
              <li className="px-2 py-2 rounded-lg text-lg">
                <NavLink
                  to="/dashboard/trips"
                  className={({ isActive }) =>
                    `nav-link flex items-center gap-3 font-medium pl-4 py-2 ${
                      isActive
                        ? "bg-primary-color text-white rounded-md active"
                        : ""
                    }`
                  }
                  // activeClassName="text-primary-color group-[bg-light-bg-color]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="23"
                    height="23"
                    x="0"
                    y="0"
                    viewBox="0 0 485.072 485"
                    className="text-white"
                  >
                    <g>
                      <path
                        d="M432 248.035c.004-11.11-.957-22.2-2.863-33.144l-15.762 2.754c11.734 67.25-16.477 135.218-72.383 174.39l-12.887-21.039a23.857 23.857 0 0 1-1.007-23.273l3.636-7.27a7.952 7.952 0 0 1 7.153-4.418h11.281a23.895 23.895 0 0 0 22.289-15.086l10.824-27.074a23.723 23.723 0 0 0 1.719-8.918v-17.602a15.909 15.909 0 0 0-4.688-11.32l-9.601-9.597a15.993 15.993 0 0 0-18.473-3l-19.687 9.847a8 8 0 0 1-7.153 0l-32-16a7.957 7.957 0 0 1-4.398-7.137v-22.113c0-8.836-7.164-16-16-16a8 8 0 0 1-8-8v-8a8.009 8.009 0 0 1 3.2-6.398l25.6-19.2-9.6-12.8-25.598 19.199a24.133 24.133 0 0 0-9.602 19.2v8c0 13.253 10.746 24 24 24v22.112a23.869 23.869 0 0 0 13.266 21.465l32 16a24.101 24.101 0 0 0 21.468 0l19.692-9.84 9.597 9.598v17.602a7.904 7.904 0 0 1-.574 2.968l-10.832 27.079a7.954 7.954 0 0 1-7.426 5.03h-11.28a23.858 23.858 0 0 0-21.462 13.266l-3.64 7.274a39.78 39.78 0 0 0 1.671 38.789l13.04 21.289c-49.282 28.371-109.262 31.082-160.903 7.281l9.817-6.554a8.032 8.032 0 0 1 4.414-1.36h20.52a23.831 23.831 0 0 0 16.976-7.031l22.625-22.625A23.847 23.847 0 0 0 248 353.402v-36.949c0-4.336-1.176-8.59-3.398-12.312l-17.09-28.578a24.138 24.138 0 0 0-20.504-11.528h-22.45a24.012 24.012 0 0 0-20 10.688l-8.84 13.312H136c-8.836 0-16 7.164-16 16v15.281a7.994 7.994 0 0 1-3.664 6.72l-24.961 16.097A174.942 174.942 0 0 1 64 248.035c0-2.68.078-5.344.2-8h13.913a7.96 7.96 0 0 1 7.153 4.426l9.367 18.773a15.916 15.916 0 0 0 14.312 8.801h8.446a15.992 15.992 0 0 0 12.793-6.355c3.03-4.012 4-9.211 2.617-14.043l-10.192-35.602h15.79a23.98 23.98 0 0 0 14.992-5.262l26.113-20.89a24.043 24.043 0 0 0 7.062-28.192l-13.695-32a8 8 0 0 1 3.242-10.015l20.145-12.086a24.1 24.1 0 0 0 11.652-20.867l-.133-11.703a175.65 175.65 0 0 1 77.727 2.93l4.098-15.427c-79.454-21.246-163.614 10.47-209.282 78.868-45.668 68.398-42.703 158.285 7.375 223.523 50.078 65.242 136.145 91.34 214.024 64.902S431.989 330.277 432 248.036zM191.8 78.805l.095 8.144a7.982 7.982 0 0 1-3.887 6.95l-20.153 12.09c-10.257 6.206-14.394 19.011-9.703 30.046l13.696 32a8.005 8.005 0 0 1-2.352 9.403l-26.113 20.886a7.997 7.997 0 0 1-4.985 1.711H122.61a15.995 15.995 0 0 0-12.793 6.36 15.99 15.99 0 0 0-2.617 14.042l10.192 35.598h-8.446l-9.37-18.734a23.858 23.858 0 0 0-21.462-13.266H65.68c9.632-69.086 59.066-126.008 126.12-145.23zm-91.241 276.43 24.449-15.758A23.916 23.916 0 0 0 136 319.317v-15.282h19.719a15.993 15.993 0 0 0 13.312-7.129l8.871-13.308a8.002 8.002 0 0 1 6.657-3.563h22.449a8.01 8.01 0 0 1 6.8 3.793l17.055 28.527a7.93 7.93 0 0 1 1.137 4.098v36.95c0 2.124-.84 4.163-2.344 5.663l-22.625 22.625a7.98 7.98 0 0 1-5.664 2.344h-20.52a24.019 24.019 0 0 0-13.327 4.04l-17.063 11.394a177.427 177.427 0 0 1-49.898-44.235zM16.543 255.82.586 256.934c.375 5.414.941 10.894 1.687 16.277l15.856-2.191a228.288 228.288 0 0 1-1.586-15.2zM40.8 137.453l-14.214-7.344a227.741 227.741 0 0 0-7.02 14.825l14.692 6.343a244.482 244.482 0 0 1 6.543-13.824zM20.734 286.074l-15.664 3.29c1.121 5.335 2.403 10.679 3.907 15.906l15.39-4.344a231.142 231.142 0 0 1-3.633-14.852zM20.535 194.965l-15.68-3.2c-1.078 5.301-2 10.743-2.718 16.15l15.855 2.12a219.262 219.262 0 0 1 2.543-15.07zM56.664 111.309l-13.09-9.215a242.441 242.441 0 0 0-8.957 13.719l13.68 8.296a223.072 223.072 0 0 1 8.367-12.8zM28.688 165.516l-15.086-5.313a241.095 241.095 0 0 0-4.915 15.633l15.426 4.266a217.576 217.576 0 0 1 4.575-14.586zM16.488 225.242l-16-1.039C.164 229.426 0 234.703 0 240.035v.512l16-.512c0-4.965.164-9.894.488-14.793zM29.016 315.484l-15.055 5.391a238.292 238.292 0 0 0 6.031 15.2l14.664-6.4a227.168 227.168 0 0 1-5.64-14.19zM75.91 87.547 64.191 76.66c-3.703 4-7.32 8.153-10.734 12.36l12.43 10.082A226.024 226.024 0 0 1 75.91 87.547zM208.8 18.203 206.56 2.348c-5.36.746-10.79 1.695-16.133 2.816l3.285 15.672a207.267 207.267 0 0 1 15.09-2.633zM239.266 16.035l-.067-16c-5.472 0-10.976.219-16.36.602l1.138 16c5.05-.403 10.144-.602 15.289-.602zM178.863 24.484 174.52 9.086a231.037 231.037 0 0 0-15.598 5l5.406 15.055a224.209 224.209 0 0 1 14.535-4.657zM98.191 66.637 88.062 54.254a237.392 237.392 0 0 0-12.308 10.789l10.95 11.664a224.578 224.578 0 0 1 11.487-10.07zM150.145 34.79l-6.403-14.657c-4.949 2.168-9.91 4.55-14.75 7.078l7.406 14.176c4.497-2.36 9.122-4.551 13.747-6.598zM123.09 48.926l-8.371-13.64a241.077 241.077 0 0 0-13.649 9.03l9.274 13.04c4.129-2.919 8.41-5.778 12.746-8.43zM329.398 445.484l6.403 14.664a237.47 237.47 0 0 0 14.758-7.046l-7.36-14.196a228.596 228.596 0 0 1-13.8 6.578zM403.742 392.883l11.7 10.93c3.71-4 7.335-8.13 10.765-12.344l-12.406-10.106a227.7 227.7 0 0 1-10.059 11.52zM381.426 413.758l10.11 12.398a249.723 249.723 0 0 0 12.327-10.761l-10.918-11.696a228.667 228.667 0 0 1-11.52 10.059zM423.055 369.172l13.066 9.265a236.156 236.156 0 0 0 8.992-13.699l-13.664-8.316a242.173 242.173 0 0 1-8.394 12.75zM356.488 431.402l8.313 13.657a245.145 245.145 0 0 0 13.672-8.993l-9.25-13.054a212.373 212.373 0 0 1-12.735 8.39zM300.656 455.723l4.32 15.41a241.168 241.168 0 0 0 15.61-4.961l-5.387-15.07c-4.8 1.734-9.672 3.261-14.543 4.62zM463.488 255.324l15.961 1.07c.367-5.421.551-10.925.551-16.359h-16c0 5.137-.172 10.235-.512 15.29zM459.367 285.59l15.672 3.2a241.731 241.731 0 0 0 2.762-16.145l-15.856-2.153a222.093 222.093 0 0 1-2.578 15.098zM451.152 315.012l15.07 5.351a237.075 237.075 0 0 0 4.954-15.617l-15.414-4.3a235.344 235.344 0 0 1-4.61 14.566zM438.953 343.059l14.207 7.37c2.504-4.8 4.871-9.8 7.04-14.8l-14.673-6.402a218.635 218.635 0 0 1-6.574 13.832zM41.238 343.438l-14.183 7.406c2.52 4.8 5.234 9.601 8.058 14.23l13.688-8.344a211.546 211.546 0 0 1-7.563-13.293zM88.8 426.438a242.271 242.271 0 0 0 13.055 9.894l9.2-13.098a234.469 234.469 0 0 1-12.2-9.23zM144.648 460.348a242.086 242.086 0 0 0 15.274 6.007l5.336-15.085a233.5 233.5 0 0 1-14.235-5.602zM115.543 445.285c4.672 2.84 9.48 5.535 14.297 8l7.351-14.219a223.536 223.536 0 0 1-13.343-7.488zM64.8 404.094c3.735 4 7.641 7.879 11.59 11.566l10.915-11.71a227.564 227.564 0 0 1-10.832-10.794zM57.176 369.5l-13.055 9.246c3.145 4.434 6.48 8.8 9.918 13.027l12.36-10.136c-3.2-3.922-6.294-8-9.223-12.137zM270.742 461.941l2.168 15.848c5.371-.738 10.8-1.664 16.145-2.777l-3.246-15.664a229.589 229.589 0 0 1-15.067 2.593zM207.61 477.867a221.58 221.58 0 0 0 16.292 1.602l1.067-16a223.372 223.372 0 0 1-15.2-1.528zM240.238 464.035v16c5.48 0 10.985-.191 16.371-.566l-1.097-16a203.61 203.61 0 0 1-15.274.566zM175.543 471.277a240.671 240.671 0 0 0 15.922 3.848l3.2-15.672a223.61 223.61 0 0 1-14.849-3.586zm0 0"
                        fill="#000000"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M305.602 67.547 301 145.789a40.04 40.04 0 0 0 11.648 30.64l15.52 15.505 28.246-73.496 28.555 28.55v35.313A23.797 23.797 0 0 0 392 199.234l13.871 13.883 16.969-28.281 4.07 4.062a24.001 24.001 0 0 0 40.485-10.593 24.003 24.003 0 0 0-6.547-23.34l-4.063-4.067 28.285-16.972-13.87-13.89a23.806 23.806 0 0 0-16.97-7.032h-35.328L390.398 84.46l73.54-28.281-15.555-15.528a39.927 39.927 0 0 0-30.63-11.64l-78.241 4.601-25.735-25.746c-9.5-9.062-24.445-9.062-33.945 0-9.375 9.375-9.375 24.57 0 33.946zm16.527 95.504a24.065 24.065 0 0 1-5.16-16.328l3.765-64 23.329 23.328zm80.59 24.183a8.07 8.07 0 0 1-1.75-5V162.95l10.23 10.215zm51.504-58.254a8.07 8.07 0 0 1 5 1.75l-14.094 8.504-10.219-10.207zm-35.535-84a23.999 23.999 0 0 1 16.328 5.16l-57.032 21.934-23.328-23.328zM291.151 19.188c3.121-3.118 8.18-3.118 11.305 0L449.535 166.27a7.997 7.997 0 0 1 0 11.3 8.18 8.18 0 0 1-11.312 0L291.153 30.492a8.002 8.002 0 0 1 0-11.305zm0 0"
                        fill="#000000"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                  Trips
                </NavLink>
              </li>
              <li className="px-2 py-2 rounded-lg text-lg ">
                <NavLink
                  to="/dashboard/expenses"
                  className={({ isActive }) =>
                    `nav-link flex items-center gap-3 font-medium pl-4 py-2 ${
                      isActive
                        ? "bg-primary-color text-white rounded-md active"
                        : ""
                    }`
                  }
                  // activeClassName="text-primary-color group-[bg-light-bg-color]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="23"
                    height="23"
                    x="0"
                    y="0"
                    viewBox="0 0 64 64"
                    className=""
                  >
                    <g>
                      <path
                        d="M3 62h8a1 1 0 0 0 1-1v-1.1l7.158-.72a8.883 8.883 0 0 1 3.348.3l3.8 1.092a10.915 10.915 0 0 0 3.01.424h5.409a10.829 10.829 0 0 0 4.532-.987l9.822-4.49a11 11 0 0 0 3.995-3.114l8.269-10.316a3.008 3.008 0 0 0-.352-4.136l-.234-.207a2.984 2.984 0 0 0-3.964.008l-9.331 8.323a8.907 8.907 0 0 1-2.613 1.624l-7.124 2.866a.983.983 0 0 1-1.065-.22l-1.013-1.02L42 46.643a1.18 1.18 0 0 0 .123-.062 6.651 6.651 0 0 0 2.316-2.33 3 3 0 0 0-3.083-4.5l-10.714 1.9a10.871 10.871 0 0 0-3.9 1.508l-3.9 2.453a8.9 8.9 0 0 1-4.742 1.372H12V46a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1zm9-13.016h6.1a10.9 10.9 0 0 0 5.807-1.675l3.9-2.453a8.881 8.881 0 0 1 3.188-1.232l10.714-1.9a.972.972 0 0 1 .981.412 1 1 0 0 1 .032 1.1 4.645 4.645 0 0 1-1.564 1.6L33.5 48.065a1 1 0 0 0-.319 1.626l2.057 2.069a2.977 2.977 0 0 0 3.23.667l7.124-2.867a10.912 10.912 0 0 0 3.2-1.987l9.33-8.323a.987.987 0 0 1 1.308 0l.233.206a1.009 1.009 0 0 1 .118 1.387L51.51 51.158a9.005 9.005 0 0 1-3.266 2.542l-9.822 4.49a8.845 8.845 0 0 1-3.7.806h-5.41a8.924 8.924 0 0 1-2.457-.346l-3.8-1.092a10.883 10.883 0 0 0-4.1-.369l-6.958.7zM4 47h6v13H4z"
                        fill="#000000"
                        opacity="1"
                        data-original="#000000"
                        className=""
                      ></path>
                      <path
                        d="M6 56h2v2H6zM27 14h2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v-2h-2v2a4 4 0 0 0 0 8h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-2-2h-2a4 4 0 0 0 4 4v2h2v-2a4 4 0 0 0 0-8h-2a2 2 0 0 1 0-4z"
                        fill="#000000"
                        opacity="1"
                        data-original="#000000"
                        className=""
                      ></path>
                      <path
                        d="M44 23.331a1 1 0 0 0-.414-.811l-4.878-3.529 4.877-3.52a1 1 0 0 0 0-1.622l-4.876-3.519 1.746-1.259a1 1 0 0 0 .156-1.483 17 17 0 1 0 0 22.824 1 1 0 0 0-.154-1.481l-1.75-1.269 4.878-3.521a1 1 0 0 0 .415-.81zm-7.585 3.518a1 1 0 0 0 0 1.621l1.932 1.4a15 15 0 1 1 0-21.742l-1.932 1.391a1 1 0 0 0 0 1.622l4.876 3.519-4.876 3.519a1 1 0 0 0 0 1.621l4.878 3.529zM46 11h2v2h-2zM50 15h2v2h-2zM43 7h2v2h-2zM45 18h2v2h-2zM51 20h2v2h-2zM47 24h2v2h-2zM44 28h2v2h-2z"
                        fill="#000000"
                        opacity="1"
                        data-original="#000000"
                        className=""
                      ></path>
                    </g>
                  </svg>
                  Expenses
                </NavLink>
              </li>
            </ul>
            {/* <Box className="w-full flex  flex-col gap-1">
              <Accordion classNames={classes} color="white">
                {Menus.map((menu) => {
                  return (
                    <Accordion.Item
                      value={menu.controlTxt}
                      key={menu.controlTxt}
                    >
                      <Accordion.Control
                        icon={menu.controlIcon}
                        className="accordCtrl"
                      >
                        {menu.controlTxt}
                      </Accordion.Control>
                      <Accordion.Panel>
                        {menu.panel.map((item) => {
                          return (
                            <Box className="w-full flex justify-between p-2 rounded-lg ">
                              <Accordion
                                classNames={classes}
                                className="w-full"
                              >
                                <Accordion.Item
                                  value={item.text}
                                  key={item.text}
                                >
                                  <Accordion.Control
                                    color="white"
                                    className="accordCtrl"
                                  >
                                    <Box className="flex items-center font-bold gap-3">
                                      {item.icon}
                                      <Text
                                        className="font-bold text-lg"
                                        fw={600}
                                      >
                                        {item.text}
                                      </Text>
                                    </Box>
                                  </Accordion.Control>
                                  <Accordion.Panel>
                                    {item.list.map((sub) => {
                                      return (
                                        <Link to={sub.link}>
                                          <Box className="flex items-center p-3 font-bold gap-3">
                                            {sub.subSecIcon}
                                            <Text
                                              className="font-bold text-lg"
                                              fw={600}
                                            >
                                              {sub.subText}
                                            </Text>
                                          </Box>
                                        </Link>
                                      );
                                    })}
                                  </Accordion.Panel>
                                </Accordion.Item>
                              </Accordion>
                            </Box>
                          );
                        })}
                      </Accordion.Panel>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </Box> */}
          </Box>
        </Box>
        <Box
          className=" dashContent flex flex-col items-center gap-6 bg-[#F7F7F9]"
          
        >
          <Box className=" dashInner flex flex-col gap-6">
            <Box
              bg={"#fff"}
              className="flex justify-between rounded-md p-3 border-b-2 border-solid  border-gray-400 items-center w-full"
            >
              <Box className="w-1/2 flex gap-5 items-center">
                <Box>
                  <Box className="openSidebarBtn">
                    <DashboardSideBar />
                  </Box>
                </Box>
                <form action="" className="searchBar w-full">
                  <Input
                    placeholder="find something"
                    leftSection={<IoSearch />}
                    rightSection={<Kbd>⌘ </Kbd>}
                    className="w-full"
                  />
                </form>
              </Box>
              <Box>
                <Flex className="flex gap-4 items-center">
                  <UnstyledButton
                    color="#C2C0D7"
                    className="allConTitle searchIcon"
                  >
                    <FaSearch />
                  </UnstyledButton>

                  <button className=" font-bold rounded-full flex items-center justify-center relative">
                    <Indicator position="top-end" offset={5} size={8}>
                      <IoNotificationsOutline
                        fontSize={23}
                        className="text-grey-500"
                      />
                    </Indicator>
                  </button>
                  <Menu shadow="lg" position="bottom-end" width={200}>
                    <Menu.Target>
                      <Avatar
                        src={profile}
                        name="Gerald"
                        className="cursor-pointer"
                      />
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
                              John Doe
                            </Text>
                          </Box>
                        </Flex>
                      </Menu.Item>
                      <Menu.Divider bg={"#A9A8BF"} />
                      <Menu.Item leftSection={<IoPersonOutline />} onClick={() => navigate("/dashboard/settings/profile")}>
                        My Profile
                      </Menu.Item>
                      <Menu.Divider bg={"#A9A8BF"} />
                      <Menu.Item
                        className="flex items-center"
                        color="red"
                        leftSection={<MdOutlineLogout />}
                      >
                        Logout
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Flex>
              </Box>
            </Box>
            <Box>
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserDashLayout;
