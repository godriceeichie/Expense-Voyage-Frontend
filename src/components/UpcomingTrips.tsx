import { Carousel } from '@mantine/carousel';
import classes from '../styles/Demo.module.css';
import { Box, Flex, Text, Tooltip } from '@mantine/core';
import { BsCalendarDate } from "react-icons/bs";
import '../styles/dashHome2.css';
import { FaLocationArrow } from "react-icons/fa";

const UpcomingTrips = () => {
  return (
    <>

       <Box className={classes.carouselContainer} h={'100%'}>
       <Carousel slideSize="100%"  w={'100%'} align="start" bg={'crimson'} height={440}  controlSize={24} loop dragFree withIndicators >
      <Carousel.Slide bg={'green'} w={'100%'}>
        <Box className='sliderCon w-full flex items-center justify-center h-full'>
            <Box className=' tripInfoBox flex items-center justify-center flex-col gap-3 ' w={'75%'} h={'60%'}>
                <Text className='text-center text-3xl font-semibold'>The Maldives!</Text>
                <Text >A Vacation for the Holidays</Text>
                <Flex className='gap-3'>
                    <Tooltip withArrow arrowSize={5} label='24-09-2024'>
                        <Box className='tripInfo flex items-center justify-center rounded-full border-solid border-2 border-gray-500'>
                        <BsCalendarDate fontSize={'27px'} />
                        </Box>
                    </Tooltip>
                    <Tooltip withArrow arrowSize={5} label='24-09-2024'>
                        <Box className='tripInfo flex items-center justify-center rounded-full border-solid border-2 border-gray-500'>
                        <FaLocationArrow fontSize={'20px'} />
                        </Box>
                    </Tooltip>
                </Flex>
            </Box>
        </Box>
      </Carousel.Slide>
      <Carousel.Slide bg={'#004010'}>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
       </Box>
    </>
  )
}

export default UpcomingTrips
