import { Box, Button, Flex, Image, Text } from "@mantine/core"
import { RiPieChart2Line } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa";
import '../../styles/dashboard.css'
import '../../styles/dashHome.css'
import {Itinerary, PopularTrips, UpcomingTrips, } from '../../components/index'


const DashHome = () => {
  return (
    <>
       <Box className="flex flex-col analisis gap-5">
        {/* statistics column */}
        <Box>

            <Flex  className="flexContainer">
                <Box className="allCon sellerImgBox bestSeller flex  rounded-xl justify-between">
                <Box className="flex sellerInfo  flex-col gap-2">
                    <Text color="#5b5865" className="allConTitle font-bold text-lg" >
                    Next Trip🎉
                    </Text>
                    <Text className="allConSubText" >Vacation at the Maldives!</Text>
                    <Text color="#6C62DF" className="price" fs={'26px'} fw={600}>$48.9k</Text>
                    <Box>
                    <Button color="#24b364">View Trip</Button>
                    </Box>
                </Box>
                <Box className=" sellerImg h-full">
                    {/* <Image src={seller}  className="" /> */}
                </Box>
                </Box>
                <Box h={'100%'} className=" flex flex-col largeCon statCon allCon justify-between h-full" >
                    <Flex className="justify-between statistics">
                        <Text className="allConTitle " color="#5b5865">Statistics</Text>
                        <Text className="allConSubText" color="#5b5865">Updated 1 month ago</Text>
                    </Flex>
                    <Flex className="justify-between statisticsNo">
                        <Box className="flex statBox items-center gap-2">
                            <Box className=" w-11 h-full rounded-md flex justify-center items-center" bg={'#3A3B64'} color="#655CCE">
                            <RiPieChart2Line color="#655CCE" fontSize={'20px'}/> 
                            </Box>
                            <Box className="flex flex-col gap-1">
                                <Text fz={'20px'} lh={1} fw={600} color="#5b5865">230k</Text>
                                <Text fz={'13px'} color="#8D8DA3" fw={600}>Budgets</Text>
                            </Box>
                        </Box>
                        <Box className="flex statBox items-center gap-2">
                            <Box className=" w-11 h-full rounded-md flex justify-center items-center" bg={'#27495f3b'} color="#0b9ab0">
                            <FaDollarSign color="#24b364" fontWeight={600} fontSize={'20px'}/> 
                            </Box>
                            <Box className="flex flex-col gap-1">
                                <Text fz={'20px'} lh={1} fw={600} color="#5b5865">8.549k</Text>
                                <Text fz={'13px'} color="#8D8DA3" fw={600}>Expenses</Text>
                            </Box>
                        </Box>

                        

                        <Box className="flex statBox items-center gap-2">
                            <Box className=" w-11 h-full rounded-md flex justify-center items-center" bg={'#2e4b4f'} color="#2aa867">
                            <FaDollarSign color="#24b364" fontWeight={600} fontSize={'20px'}/> 
                            </Box>
                            <Box className="flex flex-col gap-1">
                                <Text fz={'20px'} lh={1} fw={600} color="#5b5865">$9745</Text>
                                <Text fz={'13px'} color="#8D8DA3" fw={600}>Revenue</Text>
                            </Box>
                        </Box> 
                        
                    </Flex>
                </Box>
            </Flex>
        </Box>
        {/*  */}
        <Box>
            <Flex className="flex gap-5 flexContainer w-full">
                <Box className="bestSeller flex flex-col gap-5 ">
                    <Flex className="gap-5 chartGrp">
                        <Box className="w-1/2 flex profitChart flex-col justify-between gap-2 allCon">
                            <Text className="allConTitle">Profit</Text>
                            <Text className="allConSubText" >Last Month</Text>
                            <Box className="w-full flex  justify-center items-center" h={'130px'}>
                                {/* <LineChartComp /> */}
                            </Box>
                            <Flex justify={'space-between'} align={'center'} fw={700} mt={'10px'}>
                                <Text fz={'25px'} color="#5b5865">654K</Text>
                                <Text fz={'14px'} color="green">+8.24%</Text>
                            </Flex>
                        </Box>
                        <Box className="w-1/2 profitChart flex flex-col justify-between allCon">
                        <Text className="allConTitle">82.5k</Text>
                        <Text className="allConSubText" >Expenses</Text>
                        <Box className="radiusChart">
                            {/* <Expenses/> */}
                        </Box>
                        <Text className="allConSubText  clatext-center " mt={'10px'}>$21k Expenses more than last month</Text>
                        </Box>
                    </Flex>
                    <Box className="w-full generatedLeads allCon">
                            <Text className="allConTitle">Generated Leads</Text>
                            <Text className="allConSubText" >Monthly Report</Text>
                            <Flex justify={'space-between'} className="" fw={700} mt={'10px'}>
                               <Box>
                               <Text fz={'25px'} color="#5b5865">4,350</Text>
                               <Text fz={'14px'} color="green"> 15.8%</Text>
                               </Box>
                               <Box className="w-1/2">
                                {/* <PieChartts/> */}
                                {/* <BarChart/> */}
                                
                               </Box>
                            </Flex>
                        </Box>
                </Box>
                <Box className="allCon barChart largeCon">
                   {/* <EarningExpense/> */}
                   <UpcomingTrips/>
                </Box>
            </Flex>
        </Box>

       <Box w={'100%'} className="flex flexContainer gap-5">
       <Box  className="allCon bestSeller flex">
            {/* <PopularProduct/> */}
            <PopularTrips/>
        </Box>
        <Box className="allCon largeCon orderTable flex">
            {/* <OrderTable/> */}
            <Itinerary/>
        </Box>
       </Box>
      </Box>
    </>
  )
}

export default DashHome
