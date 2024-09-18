import {Menus} from '../data/SideBarData';
import { Accordion, Box, Drawer, Text, UnstyledButton } from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';
import { GiHamburgerMenu } from "react-icons/gi";
import classes from '../styles/Demo.module.css';
import { Link } from "react-router-dom";

const DashboardSideBar = () => {
    const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer opened={opened} onClose={close} overlayProps={{ backgroundOpacity: 0.5, blur: 4 }} w={'100%'} className="drawer" bg={'#2e3349'} title={<Box className="flex gap-3 items-center" color="white">
                <Box className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-md text-white">bed</Box>
                <Text className="font-extrabold text-xl" fw={'600'} color="white ">Company name</Text>
            </Box>
            }>
                <Box className="flex flex-col drawerSideBar sticky top-0 p-4 h-screen text-gray-200 overflow-y-scroll " color="#bbbad1" bg={'#2e3349'} >
                    <Box className="flex flex-col w-full gap-14">


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
                                                                    {/* <Box className="flex items-center font-bold gap-3">
                                                        {item.icon}
                                                        <Text className="font-bold text-lg" fw={600}>{item.text}</Text>
                                                    </Box> */}
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
            </Drawer>
            <UnstyledButton onClick={open}>
                <GiHamburgerMenu color='#8D8DA3'/>
            </UnstyledButton>
    </>
  )
}

export default DashboardSideBar
