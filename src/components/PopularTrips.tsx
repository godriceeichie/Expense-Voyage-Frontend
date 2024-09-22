import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Box, Button, Flex, Image, Menu, Pagination, Text } from "@mantine/core";
import { PopularTripList } from "../data";
import { ChunckArray } from "../scripts";


const PopularTrips = () => {
    const data = ChunckArray(

        PopularTripList.map((_, index) => ({ id: index, name: _.city, image: _.placeImg, serialNo: _.serialNo, price: _.price })),
        5
    );
    const [activePage, setPage] = useState(1);
    const items = data[activePage - 1].map((item) => (
        
        <Box className="w-full flex justify-between popularProducts items-center">
            <Flex className="gap-3">
                <Image src={item.image} className="w-14"  />
                <Box>
                    <Text className="allConTitle font-medium" color="#5b5865">{item.name}</Text>
                    <Text className="allConSubText font-normal" color="#8D8DA3">{item.serialNo}</Text>
                </Box>
            </Flex>
            <Text fz={'14px'} className="popularPrice font-medium allConSubText">
                {item.price}
            </Text>
        </Box>
    ));
  return (
    <>
       <Box className="w-full flex flex-col gap-3">
                <Flex className="justify-between ">
                    <Box className="flex flex-col gap-1" mb={'7px'}>
                        <Text className="allConTitle" fz={'20px'}>Popular Trips</Text>
                        <Text className="allConSubText" fz={'14px'}>Total 10.4k Visitors</Text>
                    </Box>
                    <Menu shadow="lg"  width={130}>
                        <Menu.Target>
                            <Button bg={'transparent'} className="popularP">
                                <HiDotsVertical className="allConTitle " fontSize={'300px'} />
                            </Button>
                        </Menu.Target>
                        <Menu.Dropdown className="menuList">
                            <Menu.Item className="menuItem">
                                Last 28 Days
                            </Menu.Item>
                            <Menu.Item className="menuItem">
                                Last Month
                            </Menu.Item>
                            <Menu.Item className="menuItem">
                                Last Year
                            </Menu.Item>
                            
                        </Menu.Dropdown>
                    </Menu>

                </Flex>
                {items}
                <Pagination total={data.length} value={activePage} color="#7367f0" onChange={setPage} mt="sm" />
               
            </Box>
    </>
  )
}

export default PopularTrips
