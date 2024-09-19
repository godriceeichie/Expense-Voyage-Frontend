import { Accordion, Avatar, Box, Button, Flex, Input, Kbd, Menu, Text, UnstyledButton } from "@mantine/core";
import { Outlet } from "react-router"
import { FaRegArrowAltCircleLeft, FaQuestion, FaSearch } from "react-icons/fa";
import { FaRegCircleQuestion, } from "react-icons/fa6";
import { IoSearch, IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageSquareDetail } from "react-icons/bi";
import classes from '../styles/Demo.module.css';
import { MdOutlineLogout } from "react-icons/md";
import '../styles/dashHome.css'
import '../styles/dashboard.css'
import profile from '../assets/avatar.png'
import {Menus} from '../data/SideBarData'
import DashboardSideBar from "../components/DashboardSideBar";
const UserDashLayout = () => {
  return (
    <>
       <Box className=" flex w-full " > 
                <Box className="flex flex-col sideBar sticky top-0 p-4 h-screen  overflow-y-scroll sidebar" color="#bbbad1" bg={'#2e3349'} w={'20%'}>
                    <Box className="flex flex-col w-full gap-14">
                        <Box className="w-full flex justify-between items-center">
                            <Box className="w-1/2 flex items-center gap-2">
                                <Box className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-md ">bed</Box>
                                <Text className="font-extrabold text-xl" fw={'600'}>Company name</Text>
                            </Box>
                            <Box className="text-2xl">
                                <FaRegArrowAltCircleLeft />
                            </Box>
                        </Box>

                        <Box className="w-full flex  flex-col gap-1">
                            <Accordion classNames={classes} color="white">
                                {
                                    Menus.map((menu) => {
                                        return (
                                            <Accordion.Item value={menu.controlTxt} key={menu.controlTxt}>
                                                <Accordion.Control icon={menu.controlIcon} className="accordCtrl">{menu.controlTxt}</Accordion.Control>
                                                <Accordion.Panel>
                                                    {
                                                        menu.panel.map((item) => {
                                                            return (
                                                                <Box className="w-full flex justify-between p-2 rounded-lg ">
                                                                   
                                                                    <Accordion classNames={classes} className="w-full">
                                                                        <Accordion.Item value={item.text} key={item.text}>
                                                                            <Accordion.Control color="white" className="accordCtrl">
                                                                                <Box className="flex items-center font-bold gap-3">
                                                                                    {item.icon}
                                                                                    <Text className="font-bold text-lg" fw={600}>{item.text}</Text>
                                                                                </Box>
                                                                            </Accordion.Control>
                                                                            <Accordion.Panel>
                                                                                {
                                                                                    item.list.map((sub) => {
                                                                                        return (
                                                                                            <Link to={sub.link} >
                                                                                                <Box className="flex items-center p-3 font-bold gap-3">
                                                                                                    {sub.subSecIcon}
                                                                                                    <Text className="font-bold text-lg" fw={600}>{sub.subText}</Text>
                                                                                                </Box>
                                                                                            </Link>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </Accordion.Panel>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                </Box>

                                                            )
                                                        })
                                                    }
                                                </Accordion.Panel>
                                            </Accordion.Item>

                                        )
                                    })
                                }
                            </Accordion>
                        </Box>
                    </Box>
                </Box>
                <Box className=" dashContent flex flex-col items-center gap-6" bg={'#ECEBEF'}>
                    <Box className=" dashInner flex flex-col gap-6" >
                        <Box bg={'#fff'} className="flex justify-between rounded-md p-3 border-b-2 border-solid  border-gray-400 items-center w-full" >

                            <Box className="w-1/2 flex gap-5 items-center">
                            <Box>
                            <Box className="openSidebarBtn">
                                <DashboardSideBar/>
                            </Box>
                            </Box>
                                <form action="" className="searchBar w-full">
                                    <Input placeholder="find something" leftSection={<IoSearch />} rightSection={<Kbd>⌘ </Kbd>} className="w-full" />
                                </form>
                            </Box>
                            <Box>
                                <Flex className="flex gap-4 items-center">
                                    <UnstyledButton color="#C2C0D7" className="allConTitle searchIcon">
                                    <FaSearch />
                                    </UnstyledButton>
                                    <Link to={''} className=" rounded-full flex items-center justify-center"><FaRegCircleQuestion fontSize={'21px'} /></Link>
                                    <Link to={''} className=" font-bold rounded-full flex items-center justify-center relative">
                                        <IoMdNotificationsOutline fontSize={'21px'} />
                                        <Text className="absolute flex items-center justify-center p-2  rounded-full text-red-500 -top-2 -right-1 font-bold" fw={'500'} color="red">12</Text>
                                    </Link>
                                    <Menu shadow="lg" position="bottom-end" width={200}>
                                        <Menu.Target>
                                            <Avatar src={profile} name="Gerald" className="cursor-pointer" />
                                        </Menu.Target>
                                        <Menu.Dropdown bd={'none'} bg={'#2e3349'}>
                                            {/* <Menu.Label>Application</Menu.Label> */}
                                            <Menu.Item className="menuItem" leftSection={<Avatar src={profile} />}>
                                                <Flex>

                                                    <Box>
                                                        <Text className=" profilename" fw={600} color="#A9A8BF" fs={'12px'}>
                                                            John Doe
                                                        </Text>
                                                        <Text className="profileRole">
                                                            Admin
                                                        </Text>
                                                    </Box>
                                                </Flex>
                                            </Menu.Item>
                                            <Menu.Divider bg={'#A9A8BF'} />
                                            <Menu.Item className="menuItem" leftSection={<IoPersonOutline />}>
                                                My profile
                                            </Menu.Item>
                                            <Menu.Item className="menuItem" leftSection={<IoSettingsOutline />}>
                                                Settings
                                            </Menu.Item>
                                            <Menu.Divider bg={'#A9A8BF'} />
                                            <Menu.Item className="menuItem" leftSection={<BiMessageSquareDetail />}>
                                                Messages
                                            </Menu.Item>
                                            <Menu.Item className="menuItem" leftSection={<FaQuestion />}>
                                                FAQs
                                            </Menu.Item>
                                            <Menu.Item className="menuItem w-full">
                                                <Button className=" flex menuBtn" color="red" fullWidth>
                                                    <Text className="menuBtn">Logout</Text>
                                                    <MdOutlineLogout fontWeight={600} className="menuBtn" />
                                                </Button>
                                            </Menu.Item>
                                            <Menu.Divider bg={'#A9A8BF'} />
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
  )
}

export default UserDashLayout
